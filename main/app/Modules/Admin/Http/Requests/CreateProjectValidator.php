<?php

namespace App\Modules\Admin\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Contracts\Validation\Validator;
use App\Modules\Admin\Exceptions\AxiosValidationExceptionBuilder;

class CreateProjectValidator extends FormRequest
{
	/**
	 * Get the validation rules that apply to the request.
	 *
	 * @return array
	 */
	public function rules()
	{
		return [
			'desc' => 'required',
			'name' => 'required|unique:projects,name',
			'imageUrl' => 'required',
			'location' => 'required',
			'imageName' => 'required',
		];
	}

	/**
	 * Determine if the user is authorized to make this request.
	 *
	 * @return bool
	 */
	public function authorize()
	{
		// return Auth::user()->can_update_stock();
		return true;
	}

	public function messages()
	{
		return [
			'desc.required' => 'A short description is required for the project',
			'name.required' => 'Enter a project name',
			'name.unique' => 'That project name is taken',
			'imageUrl.required' => 'You have not entered an image for this project',
			'imageName.required' => 'You have not entered an image for this project',
		];
	}

	/**
	 * Overwrite the validator response so we can customise it per the structure requested from the fronend
	 *
	 * @param \Illuminate\Contracts\Validation\Validator $validator
	 * @return void
	 */
	protected function failedValidation(Validator $validator)
	{
		/**
		 * * Alternatively throw new AuthenticationFailedException($validator). Remember to use App\Exceptions\Admin\AuthenticationFailedException;
		 * * And handle there. That will help for reuse. Handling here for compactness purposes
		 * ? Who knows they might ask for a different format for the enxt validation
		 */
		throw new AxiosValidationExceptionBuilder($validator);
	}
}
