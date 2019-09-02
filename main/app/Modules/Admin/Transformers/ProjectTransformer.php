<?php

namespace App\Modules\Admin\Transformers;

class ProjectTransformer
{


	public function rows($value)
	{
		foreach ($value as $key => &$v) {
			$v['sn'] = $key + 1;
		};
		return $value;
	}

	public function transformToDatableRow($project)
	{
		return [
			'id' => $project->id,
			'name' => $project->name,
			'desc' => $project->desc,
			'location' => $project->location,
			'img' => $project->img,
		];
	}

	public function transformForAdminViewAllProjects($projects)
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
					'text' => 'Project Name',
					'value' => "name",
					'align' => "center",
					'sortable' => true
				],
				[
					'text' => 'Description',
					'value' => "desc",
					'align' => "center",
				],
				[
					'text' => 'Image',
					'value' => "img",
					'align' => "center",
				],
				[
					'text' => 'Actions',
					'value' => null,
					'sortable' => false,
					'align' => "center",
				]
			],
			'rows' => $this->collectionTransformer($projects, 'transformToDatableRow')
		];
	}


	public function collectionTransformer($collection, $transformerMethod)
	{
		return $collection->map(function ($v) use ($transformerMethod) {
			return $this->$transformerMethod($v);
		});
	}
}
