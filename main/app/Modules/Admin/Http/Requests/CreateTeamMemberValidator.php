<?php

namespace App\Modules\Admin\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Contracts\Validation\Validator;
use App\Modules\Admin\Exceptions\AxiosValidationExceptionBuilder;

class CreateTeamMemberValidator extends FormRequest
{
	/**
	 * Get the validation rules that apply to the request.
	 *
	 * @return array
	 */
	public function rules()
	{
		return [
			'name' => 'required|unique:team_members,name',
			'job_title' => 'required',
			'phone' => 'required',
			'email' => 'required',
			'imageUrl' => 'required',
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
			'name.required' => 'Enter the team member\'s name',
			'name.unique' => 'That name already belongs to another team member',
			'job_title.required' => 'The team member should have a job title',
			'email.required' => 'The team member should have an email',
			'phone.required' => 'The phone is required',
			'imageUrl.required' => 'You have not entered an image for this team member',
			'imageName.required' => 'You have not entered an image for this team member',
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
