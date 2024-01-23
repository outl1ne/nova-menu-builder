<?php

namespace Workup\MenuBuilder\Http\Controllers;

use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Routing\Controller;
use Workup\MenuBuilder\Http\Requests\MenuItemFormRequest;
use Workup\MenuBuilder\Http\Traits\MenuHelpers;
use Workup\MenuBuilder\Settings;

class ItemController extends Controller
{
    use MenuHelpers;

    /**
     * Creates new MenuItem.
     **/
    public function store(MenuItemFormRequest $request): JsonResponse
    {
        $menuItemModel = Settings::getMenuItemClass();

        $data = $request->getValues();

        $data['order'] = $menuItemModel::max('id') + 1;
        $data['item_type'] = $data['class'];

        $model = new $menuItemModel;
        foreach ($data as $key => $value) {
            $model->{$key} = $this->cleanUpStringValue($value);
        }
        $model->save();

        if ($request->hasFile('media')) {
            $model->addMediaFromRequest('media')->toMediaCollection(
                $model->getDefaultMediaCollection()
            );
        }

        return response()->json(['success' => true], 200);
    }

    /**
     * Returns the menu item as JSON.
     **/
    public function show($menuItemId): JsonResponse
    {
        $menuItem = Settings::getMenuItemClass()::find($menuItemId);

        if (isset($menuItem)) {

            // TODO: it work only for update modal, so we should create vue component for this
            $menuItem->parent = Settings::getMenuClass()::find($menuItem->menu_id);
            $childItems = Settings::getMenuItemClass()::where('menu_id', $menuItem->menu_id)
                    ->whereNull('parent_id')
                    ->where('locale', $menuItem->locale)
                    ->orderBy('order')
                    ->orderBy('label')
                    ->get();
            foreach ($childItems as $childItem) {
                $menuItem->parent_id = $menuItem->parent_id ?? $menuItem->menu_id;
                $childItem->child_items = $this->recursivelyGetChildItems($childItem);
            }
            $menuItem->child_items = $childItems;
            // END

            $menuItem->media_url = $menuItem->getFirstMediaUrl($menuItem->getDefaultMediaCollection());

            return response()->json($menuItem, 200);
        } else {
            return response()->json(['error' => 'item_not_found'], 400);
        }
    }

    /**
     * Updates a MenuItem.
     **/
    public function update(MenuItemFormRequest $request, $menuItemId): JsonResponse
    {
        $menuItem = Settings::getMenuItemClass()::find($menuItemId);

        if (! isset($menuItem)) {
            return response()->json(['error' => 'menu_item_not_found'], 400);
        }
        $data = $request->getValues();

        $data['item_type'] = $data['class'];

        if($data['menu_id'] == $data['parent_id']) {
            $data['parent_id'] = null;
        }

        $menuItem->data = [];
        foreach ($data as $key => $value) {
            $menuItem->{$key} = $this->cleanUpStringValue($value);
        }

        $menuItem->save();

        if ($request->hasFile('media')) {
            $menuItem->addMediaFromRequest('media')->toMediaCollection(
                $menuItem->getDefaultMediaCollection()
            );
        } else {
            $menuItem->clearMediaCollection($menuItem->getDefaultMediaCollection());
        }

        return response()->json(['success' => true], 200);
    }

    /**
     * Deletes a MenuItem.
     **/
    public function destroy($menuItemId): JsonResponse
    {
        $menuItem = Settings::getMenuItemClass()::findOrFail($menuItemId);

        $menuItem->clearMediaCollection($menuItem->getDefaultMediaCollection());

        // TODO children should be deleted
        $menuItem->children()->delete();
        $menuItem->delete();

        return response()->json(['success' => true], 200);
    }

    /**
     * Get link types for locale.
     **/
    public function getMenuItemTypes(Request $request, $menuId): JsonResponse
    {
        $menu = Settings::getMenuClass()::find($menuId);
        if ($menu === null) {
            return response()->json(['error' => 'menu_not_found'], 404);
        }

        $locale = $request->get('locale');
        if ($locale === null) {
            return response()->json(['error' => 'locale_required'], 400);
        }

        $menuItemTypes = [];
        $menuItemTypesRaw = Settings::getMenuItemTypes();

        $formatAndAppendMenuItemType = function ($typeClass) use (&$menuItemTypes, $locale) {
            if (! class_exists($typeClass)) {
                return;
            }

            $data = [
                'name' => $typeClass::getName(),
                'type' => $typeClass::getType(),
                'fields' => Settings::getFieldsFromMenuItemTypeClass($typeClass) ?? [],
                'class' => $typeClass,
            ];

            if (method_exists($typeClass, 'getOptions')) {
                $options = $typeClass::getOptions($locale) ?? [];
                $data['options'] = array_map(function ($value, $key) {
                    return ['id' => (string) $key, 'label' => $value];
                }, array_values($options), array_keys($options));
            }

            $menuItemTypes[] = $data;
        };

        foreach ($menuItemTypesRaw as $typeClass) {
            $formatAndAppendMenuItemType($typeClass);
        }

        return response()->json($menuItemTypes, 200);
    }

    /**
     * @return bool|mixed|null
     */
    protected function cleanUpStringValue(mixed $value): mixed
    {
        $value = match ($value) {
            'null' => null,
            'true' => true,
            'false' => false,
            default => $value,
        };

        return $value;
    }
}
