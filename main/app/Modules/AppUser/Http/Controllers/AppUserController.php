<?php

namespace App\Modules\AppUser\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\Routing\Controller;
use Illuminate\Support\Facades\Route;
use App\Modules\AppUser\Models\AppUser;
use RealRashid\SweetAlert\Facades\Alert;

class AppUserController extends Controller
{
	/**
	 * The normal user routes that require authentication
	 * @return Response
	 */
	public static function routes()
	{
		LoginController::routes();
		RegisterController::routes();

		// Route::group(['middleware' => ['auth', 'appusers'], 'prefix' => AppUser::DASHBOARD_ROUTE_PREFIX], function(){
		Route::group(['prefix' => AppUser::DASHBOARD_ROUTE_PREFIX], function () {
			Route::get('/{subcat?}', function () {
				// dd(AppUser::all());
				return view('appuser::index');
			})->name('appuser.dashboard')->where('subcat', '^((?!(api)).)*'); //Matches all routes except routes that start with the list provided.;
		});
	}
}
