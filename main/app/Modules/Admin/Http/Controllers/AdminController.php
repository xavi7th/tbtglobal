<?php

namespace App\Modules\Admin\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\Routing\Controller;
use App\Modules\Admin\Models\Client;
use App\Modules\Admin\Models\Slider;
use App\Modules\Admin\Models\Project;
use Illuminate\Support\Facades\Route;
use App\Modules\Admin\Models\TeamMember;
use App\Modules\Admin\Transformers\SlideTransformer;
use App\Modules\Admin\Transformers\ClientTransformer;
use App\Modules\Admin\Transformers\ProjectTransformer;
use App\Modules\Admin\Transformers\TeamMemberTransformer;
use App\Modules\Admin\Http\Requests\CreateClientValidator;
use App\Modules\Admin\Http\Requests\CreateSliderValidator;
use App\Modules\Admin\Http\Requests\CreateProjectValidator;
use App\Modules\Admin\Http\Requests\CreateTeamMemberValidator;

class AdminController extends Controller
{
	/**
	 * The admin routes
	 * @return Response
	 */
	public static function routes()
	{
		LoginController::routes();

		Route::group(['middleware' => ['auth']], function () {

			Route::group(['prefix' => 'api'], function () {


				Route::group(['middleware' => 'auth'], function () {

					Route::get('/sliders', function () {
						return response()->json(['slides' => (new SlideTransformer)->transformForAdminViewAllSlides(Slider::all())], 200);
					});

					Route::post('/slider/create', function (CreateSliderValidator $request) {
						try {
							Slider::create([
								'small_title' => request('small_title'),
								'big_title' => request('big_title'),
								'desc' => request('desc'),
								'position' => request('position'),
								'img' => ajax_upload_image(request('imageUrl'), 'projects'),
							]);
						} catch (\Throwable $e) {
							return response()->json(['message' => $e->getMessage()], 520);
						}
						return response()->json(['status' => true], 201);
					});

					Route::delete('/slider/{id}/delete', function ($id) {
						Slider::destroy($id);
						return response()->json(['status' => true], 204);
					});

					Route::get('/projects', function () {
						return response()->json(['projects' => (new ProjectTransformer)->transformForAdminViewAllProjects(Project::all())], 200);
					});

					Route::post('/project/create', function (CreateProjectValidator $request) {
						$project = Project::create([
							'name' => request('name'),
							'desc' => request('desc'),
							'img' => ajax_upload_image(request('imageUrl'), 'projects'),
						]);
						return response()->json(['project' => $project], 201);
					});

					Route::delete('/project/{id}/delete', function ($id) {
						Project::destroy($id);
						return response()->json(['status' => true], 204);
					});

					Route::get('/team-members', function () {
						return response()->json(['team_members' => (new TeamMemberTransformer)->transformForAdminViewAllTeamMembers(TeamMember::all())], 200);
					});

					Route::post('/team-member/create', function (CreateTeamMemberValidator $request) {
						$team_member = TeamMember::create([
							'name' => request('name'),
							'job_title' => request('job_title'),
							'phone' => request('phone'),
							'email' => request('email'),
							'img' => ajax_upload_image(request('imageUrl'), 'team-members'),
						]);
						return response()->json(['team_member' => $team_member], 201);
					});

					Route::delete('/team-member/{id}/delete', function ($id) {
						TeamMember::destroy($id);
						return response()->json(['status' => true], 204);
					});

					Route::get('/clients', function () {
						return response()->json(['clients' => (new ClientTransformer)->transformForAdminViewAllClients(Client::all())], 200);
					});

					Route::post('/client/create', function (CreateClientValidator $request) {
						$client = Client::create([
							'name' => request('name'),
							'img' => ajax_upload_image(request('imageUrl'), 'clients'),
						]);
						return response()->json(['client' => $client], 201);
					});

					Route::delete('/client/{id}/delete', function ($id) {
						Client::destroy($id);
						return response()->json(['status' => true], 204);
					});
				});
			});

			Route::get('/{subcat?}', function () {
				return view('admin::index');
			})->name('admin.dashboard')->where('subcat', '^((?!(api)).)*'); //Matches all routes except routes that start with the list provided.;
		});
	}
}
