<?php

namespace App\Modules\Admin\Models;

use Illuminate\Database\Eloquent\Model;

class TeamMember extends Model
{
	protected $fillable = [
		'name', 'job_title', 'phone', 'email', 'img',
	];
}
