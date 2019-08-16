<?php

namespace App\Modules\Admin\Models;

use Illuminate\Database\Eloquent\Model;

class Slider extends Model
{
	protected $fillable = [
		'small_title',
		'big_title',
		'desc',
		'position',
		'img'
	];
}
