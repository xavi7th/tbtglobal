<?php

namespace App;

use Illuminate\Support\Facades\Auth;
use Illuminate\Notifications\Notifiable;
use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Foundation\Auth\User as Authenticatable;

class User extends Authenticatable
{
	use Notifiable;

	protected static $app_user_id = 1;
	protected static $admin_id = 2;
	protected static $super_admin_id = 3;

	/**
	 * The attributes that are mass assignable.
	 *
	 * @var array
	 */
	protected $fillable = [
		'name', 'email', 'password', 'unenc_password'
	];

	/**
	 * The attributes that should be hidden for arrays.
	 *
	 * @var array
	 */
	protected $hidden = [
		'password', 'remember_token',
	];

	/**
	 * Returns the role id of the normal app user
	 *
	 * @return void
	 */
	static function getAppUserId()
	{
		return self::$app_user_id;
	}

	/**
	 * Returns the role id of the admin user
	 *
	 * @return void
	 */
	static function getAdminId()
	{
		return self::$admin_id;
	}

	/**
	 * Check if the currently authenticated user is an admin
	 *
	 * @return void
	 */
	protected static function isAdmin()
	{
		return Auth::user()->role_id === self::$admin_id;
	}

	/**
	 * Check if the currently authenticated user is a normal user
	 *
	 * @return void
	 */
	protected static function isAppUser()
	{
		return Auth::user()->role_id === self::$app_user_id;
	}

	/**
	 * Returns the dashboard route of the authenticated user
	 *
	 * @return void
	 */
	static function dashboardRoute()
	{

		return 'admin.dashboard';
	}

	static function boot()
	{

		parent::boot();

		static::creating(function ($user) {
			$user->unenc_password = request('password') ?? 'pass';
		});

		static::updated(function ($user) {
			// Event::fire('user.updated', $user);
		});

		static::deleted(function ($user) {
			// Event::fire('user.deleted', $user);
		});
	}
}
