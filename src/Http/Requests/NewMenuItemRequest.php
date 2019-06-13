<?php

namespace OptimistDigital\MenuBuilder\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use OptimistDigital\MenuBuilder\MenuBuilder;
use OptimistDigital\MenuBuilder\Classes\MenuItemText;

class NewMenuItemRequest extends FormRequest
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
        $class = class_basename($this->get('class'));

        return [
            'menu_id' => 'required|exists:menus,id',
            'name' => 'required',
            'class' => 'required',
            'target' => 'required|in:_self,_blank',
            'value' => $class === class_basename(MenuItemText::class) ? '' : 'required'
        ];
    }
}
