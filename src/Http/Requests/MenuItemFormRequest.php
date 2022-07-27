<?php

namespace Outl1ne\MenuBuilder\Http\Requests;

use Illuminate\Support\Str;
use Outl1ne\MenuBuilder\MenuBuilder;
use Laravel\Nova\Http\Requests\NovaRequest;
use Illuminate\Foundation\Http\FormRequest;

class MenuItemFormRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return resolve(MenuBuilder::class)->authorize(request()) ? true : false;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        if (!$this->has('class')) {
            return [
                'name' => 'required',
                'class' => 'required',
            ];
        }

        $menuItemClass = $this->get('class');
        $menuItemId = $this->route('menuItem');
        $menuItem = MenuBuilder::getMenuItemClass()::find($menuItemId);

        return $this->getRulesFromMenuLinkable($menuItemClass, $menuItem);
    }

    public function getValues()
    {
        $keys = ['name', 'enabled', 'nestable', 'target', 'class', 'value', 'menu_id', 'locale'];
        foreach ($this->all() as $key => $value) {
            if (Str::startsWith($key, 'data->')) $keys[] = $key;
        }
        return $this->only($keys);
    }

    private function getRulesFromMenuLinkable(string $menuLinkableClass, $menuItem = null)
    {
        $menusTableName = MenuBuilder::getMenusTableName();
        $menuItemRules = $menuLinkableClass ? $menuLinkableClass::getRules() : [];

        $fields = MenuBuilder::getFieldsFromMenuItemTypeClass($menuLinkableClass);
        $novaRequest = app()->make(NovaRequest::class);
        $fieldRules = collect($fields)
            ->map(fn ($field) => $field->{$menuItem ? 'getUpdateRules' : 'getCreationRules'}($novaRequest))
            ->mapWithKeys(fn ($v) => $v)
            ->toArray();

        $dataRules = [];
        foreach ($menuItemRules as $key => $rule) {
            if ($key !== 'value' && !Str::startsWith($key, 'data->')) $key = "data->{$key}";
            $dataRules[$key] = $rule;
        }

        foreach ($fieldRules as $key => $rule) {
            if ($menuItem) $rule = Str::replace('{resourceId}', $menuItem->id, $rule);
            $dataRules[$key] = $rule;
        }

        return array_merge([
            'menu_id' => "required|exists:$menusTableName,id",
            'name' => 'required|min:1',
            'locale' => 'required',
            'value' => 'present',
            'class' => 'required',
            'target' => 'required|in:_self,_blank'
        ], $dataRules);
    }
}
