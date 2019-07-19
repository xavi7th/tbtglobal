<?php

namespace App\Modules\Admin\Transformers;

class ClientTransformer
{

	public function transformToDatableRow($client)
	{
		return [
			'id' => $client->id,
			'name' => $client->name,
			'img' => $client->img,
		];
	}

	public function transformForAdminViewAllClients($clients)
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
				],
				[
					'text' => 'Client Name',
					'value' => "name",
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
			'rows' => $this->collectionTransformer($clients, 'transformToDatableRow')
		];
	}


	public function collectionTransformer($collection, $transformerMethod)
	{
		return $collection->map(function ($v) use ($transformerMethod) {
			return $this->$transformerMethod($v);
		});
	}
}
