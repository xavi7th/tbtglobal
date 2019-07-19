<?php

namespace App\Modules\Admin\Models;

use Illuminate\Database\Eloquent\Model;

class Project extends Model
{
	protected $fillable = [
		'name', 'desc', 'img', 'date', 'location'
	];

	protected $date = ['date'];
}
