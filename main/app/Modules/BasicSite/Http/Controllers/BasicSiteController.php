<?php

namespace App\Modules\BasicSite\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\Routing\Controller;
use App\Modules\Admin\Models\Slider;
use Illuminate\Support\Facades\Route;
use App\Modules\AppUser\Models\AppUser;
use App\Modules\Admin\Transformers\SlideTransformer;

class BasicSiteController extends Controller
{
	/**
	 * The basic site routes that don't require authentication
	 * @return Response
	 */
	public static function routes()
	{
		Route::group(['middleware' => 'web', 'namespace' => 'App\\Modules\BasicSite\Http\Controllers'], function () {

			Route::get('/sliders', function () {
				return response()->json(['slides' => (new SlideTransformer)->transformForAdminViewAllSlides(Slider::all())], 200);
			})->prefix('api');


			Route::get('/{subcat?}', function () {
				return view('basicsite::index');
			})->where('subcat', '^((?!(admin|api|_debugbar)).)*'); //Matches all routes except routes that start with the list provided.
		});
	}
}
