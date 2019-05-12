<?php

namespace App\Modules\AppUser\Models;

use App\User;
use Illuminate\Database\Eloquent\Builder;

class AppUser extends User
{
	protected $fillable = [];
	protected $table = "users";
	const DASHBOARD_ROUTE_PREFIX = "dashboard";

	static function canAccess()
	{
		return parent::isAppUser();
	}

	/**
	 * The booting method of the model
	 *
	 * @return void
	 */
	protected static function boot()
	{
		parent::boot();

		static::addGlobalScope('appUsersOnly', function (Builder $builder) {
			$builder->where('role_id', parent::$app_user_id);
		});
	}
}
