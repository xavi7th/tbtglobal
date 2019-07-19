<?php

namespace App\Modules\Admin\Transformers;

class TeamMemberTransformer
{

	public function transformToDatableRow($team_member)
	{
		return [
			'id' => $team_member->id,
			'name' => $team_member->name,
			'job_title' => $team_member->job_title,
			'phone' => $team_member->phone,
			'email' => $team_member->email,
			'img' => $team_member->img,
		];
	}

	public function transformForAdminViewAllTeamMembers($team_members)
	{
		return [
			'headers' => [
				[
					'text' => 'S/N',
					'align' => "center",
					'sortable' => false,
					'value' => "id"
				],
				[
					'text' => 'Image',
					'value' => "img",
					'align' => "center",
					'sortable' => false
				],
				[
					'text' => 'Name',
					'value' => "name",
					'align' => "center",
					'sortable' => true
				],
				[
					'text' => 'Job Title',
					'value' => "job_title",
					'align' => "center",
					'sortable' => true
				],
				[
					'text' => 'Phone',
					'value' => "phone",
					'align' => "center",
					'sortable' => false
				],
				[
					'text' => 'Email',
					'value' => "email",
					'align' => "center",
					'sortable' => true
				],
				[
					'text' => 'Actions',
					'value' => null,
					'sortable' => false,
					'align' => "center",
				]
			],
			'rows' => $this->collectionTransformer($team_members, 'transformToDatableRow')
		];
	}


	public function collectionTransformer($collection, $transformerMethod)
	{
		return $collection->map(function ($v) use ($transformerMethod) {
			return $this->$transformerMethod($v);
		});
	}
}
