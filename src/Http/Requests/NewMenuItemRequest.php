<?php

namespace Infinety\MenuBuilder\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Support\Facades\Route;
use Infinety\MenuBuilder\MenuBuilder;

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
        $rules = [
            'menu_id' => 'required|exists:menus,id',
            'name'    => 'required',
            'type'    => 'required|in:link,route',
            'target'  => 'required|in:_self,_blank',
        ];

        if (request()->get('type') == 'link') {
            $rules['url'] = 'required';
        }

        if (request()->get('type') == 'route') {
            $rules['route'] = [
                'required',
                function ($attribute, $value, $fail) {
                    if (Route::has($value)) {
                        return true;
                    }

                    return $fail(ucfirst($attribute).' not is a real route name');
                },
            ];
            // $rules['parameters'] = 'required';
        }

        return $rules;
    }
}
