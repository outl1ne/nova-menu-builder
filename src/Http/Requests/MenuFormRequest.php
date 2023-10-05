<?php

namespace Workup\MenuBuilder\Http\Requests;

use Illuminate\Validation\Rule;
use Workup\MenuBuilder\MenuBuilderTool;
use Illuminate\Foundation\Http\FormRequest;

class MenuFormRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return (bool) resolve(MenuBuilderTool::class)->authorize(request());
    }

    /**
     * Get the validation rules that apply to the request.
     */
    public function rules(): array
    {
        return [
            'name' => [
                'required',
                'string'
            ],
            'slug' => [
                'required',
                'string',
                Rule::unique(config('nova-menu-builder.table_name'))->ignore($this->id),
            ],
        ];
    }
}
