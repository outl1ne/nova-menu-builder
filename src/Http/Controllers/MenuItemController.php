<?php

namespace Workup\MenuBuilder\Http\Controllers;

use Illuminate\Http\Request;
use Workup\MenuBuilder\Settings;
use Illuminate\Http\JsonResponse;
use Illuminate\Routing\Controller;

class MenuItemController extends Controller
{
    /**
     * Get link types for locale.
     **/
    public function __invoke(Request $request, $menuId): JsonResponse
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
}
