<?php

namespace App\Modules\Admin\Transformers;

class SlideTransformer
{

	public function transformToDatableRow($slide)
	{
		return [
			'id' => $slide->id,
			'highlight_text' => $slide->highlight_text,
			'main_text' => $slide->main_text,
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
					'text' => 'Highlight Text',
					'value' => "highlight_text",
					'align' => "center",
					'sortable' => true
				],
				[
					'text' => 'Main Text',
					'value' => "main_text",
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
