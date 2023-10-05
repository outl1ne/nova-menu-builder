<?php

namespace Workup\MenuBuilder\Http\Requests;

use Illuminate\Support\Str;
use Workup\MenuBuilder\Settings;
use Workup\MenuBuilder\MenuBuilderTool;
use Illuminate\Foundation\Http\FormRequest;
use Laravel\Nova\Http\Requests\NovaRequest;

class MenuItemFormRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize(): bool
    {
        return (bool) resolve(MenuBuilderTool::class)->authorize(request());
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules(): array
    {
        if (! $this->has('class')) {
            return [
                'name' => 'required',
                'class' => 'required',
            ];
        }

        $menuItemClass = $this->get('class');
        $menuItemId = $this->route('menuItem');
        $menuItem = Settings::getMenuItemClass()::find($menuItemId);

        return $this->getRulesFromMenuLinkable($menuItemClass, $menuItem);
    }

    public function getValues(): array
    {
        $keys = [
            'menu_id',
            'slug',
            'item_type',
            'entity_id',
            'entity_item_id',
            'is_index',
            'label',
            'locale',
            'path',
            'class',
            'url',
            'target',
            'is_active',
        ];

        foreach ($this->all() as $key => $value) {
            if (Str::startsWith($key, 'data->')) {
                $keys[] = $key;
            }
        }

        return $this->only($keys);
    }

    private function getRulesFromMenuLinkable(string $menuLinkableClass, $menuItem = null): array
    {
        $menusTableName = Settings::getMenusTableName();
        $menuItemRules = $menuLinkableClass ? $menuLinkableClass::getRules() : [];

        $fields = Settings::getFieldsFromMenuItemTypeClass($menuLinkableClass);
        $novaRequest = app()->make(NovaRequest::class);
        $fieldRules = collect($fields)
            ->map(fn ($field) => $field->{$menuItem ? 'getUpdateRules' : 'getCreationRules'}($novaRequest))
            ->mapWithKeys(fn ($v) => $v)
            ->toArray();

        $dataRules = [];
        foreach ($menuItemRules as $key => $rule) {
            if ($key !== 'value' && ! Str::startsWith($key, 'data->')) {
                $key = "data->{$key}";
            }
            $dataRules[$key] = $rule;
        }

        foreach ($fieldRules as $key => $rule) {
            if ($menuItem) {
                $rule = Str::replace('{resourceId}', $menuItem->id, $rule);
            }
            $dataRules[$key] = $rule;
        }

        return array_merge([
            'menu_id' => "required|exists:$menusTableName,id",
            'slug' => 'required',
            'item_type' => 'required',
            'label' => 'required|min:1',
            'locale' => 'required',
            'path' => 'present',
            'url' => 'present',
//            'target' => 'required|in:_self,_blank',
        ], $dataRules);
    }
}
