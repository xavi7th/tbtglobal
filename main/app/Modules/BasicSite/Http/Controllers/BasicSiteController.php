<?php

namespace App\Modules\BasicSite\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\Routing\Controller;
use Illuminate\Support\Facades\Log;
use App\Modules\Admin\Models\Client;
use App\Modules\Admin\Models\Slider;
use Illuminate\Support\Facades\Mail;
use App\Modules\Admin\Models\Project;
use Illuminate\Support\Facades\Route;
use Illuminate\Support\Facades\Artisan;
use App\Modules\BasicSite\Emails\ContactAdmin;
use App\Modules\Admin\Transformers\SlideTransformer;
use App\Modules\Admin\Transformers\ClientTransformer;
use App\Modules\Admin\Transformers\ProjectTransformer;
use App\Modules\BasicSite\Http\Requests\ContactAdminValidator;

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

			Route::get('/projects', function () {
				return response()->json(['projects' => (new ProjectTransformer)->transformForAdminViewAllProjects(Project::all())], 200);
			})->prefix('api');

			Route::get('/clients', function () {
				return response()->json(['clients' => (new ClientTransformer)->transformForAdminViewAllClients(Client::all())], 200);
			})->prefix('api');

			Route::post('/contact-us', function (ContactAdminValidator $request) {
				// return $request->message;
				// return new ContactAdmin($request);
				try {
					Mail::to(config('app.email'))->send(new ContactAdmin($request));
					return response()->json(['status' => true], 201);
				} catch (\Throwable $e) {
					Log::critical($e);
					return response()->json(['status' => false], 500);
				}
			})->prefix('api');


			Route::get('/storage-link', function () {
				/**
				 * ! L5.8 use the commands directly
				 */
				return Artisan::call('storage:link');
			});

			Route::get('/install-migrations', function () {
				/**
				 * ! L5.8 use the commands directly
				 */
				return Artisan::call('migrate:install --database=foo');
			});



			Route::get('/{subcat?}', function () {
				// dd(opcache_get_configuration());
				// dd(opcache_get_status());
				// dd(config());

				return view('basicsite::index');
			})->where('subcat', '^((?!(admin|api|_debugbar)).)*'); //Matches all routes except routes that start with the list provided.
		});
	}
}
