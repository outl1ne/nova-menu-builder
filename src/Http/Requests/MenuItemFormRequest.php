<?php

namespace Workup\MenuBuilder\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Support\Str;
use Workup\MenuBuilder\MenuBuilder;

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
        return MenuBuilder::getRulesFromMenuLinkable($this->get('class'));
    }

    public function getValues()
    {
        $keys = [
            'menu_id',
            'item_type',
            'entity_id',
            'entity_item_id',
            'is_index',
            'label',
            'locale',
            'slug',
            'class',
            'url',
            'target',
            'is_active',
        ];
        foreach ($this->all() as $key => $value) {
            if (Str::startsWith($key, 'data->')) $keys[] = $key;
        }
        return $this->only($keys);
    }
}
