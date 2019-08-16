<?php

namespace App\Modules\Admin\Transformers;

class SlideTransformer
{

	public function transformToDatableRow($slide)
	{
		return [
			'id' => $slide->id,
			'small_title' => $slide->small_title,
			'big_title' => $slide->big_title,
			'desc' => $slide->desc,
			'position' => $slide->position,
			'img' => $slide->img,
			// 'actions' => null
		];
	}

	public function transformForAdminViewAllSlides($slides)
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
					'text' => 'Small Title',
					'value' => "small_title",
					'align' => "center",
					'sortable' => true
				],
				[
					'text' => 'Big Title',
					'value' => "big_title",
					'align' => "center",
				],
				[
					'text' => 'Description',
					'value' => "desc",
					'align' => "center",
					'sortable' => true
				],
				[
					'text' => 'Position',
					'value' => "position",
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
			'rows' => $this->collectionTransformer($slides, 'transformToDatableRow')
		];
	}


	public function collectionTransformer($collection, $transformerMethod)
	{
		return $collection->map(function ($v) use ($transformerMethod) {
			return $this->$transformerMethod($v);
		});
	}
}
