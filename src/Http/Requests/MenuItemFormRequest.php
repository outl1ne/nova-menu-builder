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
    public function authorize(): bool
    {
        return (bool) resolve(MenuBuilder::class)->authorize(request());
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules(): array
    {
        return MenuBuilder::getRulesFromMenuLinkable($this->get('class'));
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
}
