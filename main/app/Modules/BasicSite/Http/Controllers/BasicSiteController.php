<?php

namespace App\Modules\BasicSite\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\Routing\Controller;
use Illuminate\Support\Facades\Route;
use App\Modules\AppUser\Models\AppUser;

class BasicSiteController extends Controller
{
	/**
	 * The basic site routes that don't require authentication
	 * @return Response
	 */
	public static function routes()
	{
		Route::group(['middleware' => 'web', 'namespace' => 'App\\Modules\BasicSite\Http\Controllers'], function () {
			Route::get('/{subcat?}', function () {
				return view('basicsite::index');
			})->where('subcat', '(welcome)'); //Handle only routes that match the list provided.
			// })->where('subcat', '^((?!(admin|user-dashboard|user)).)*'); //Matches all routes except routes that start with the list provided.
		});
	}
}
