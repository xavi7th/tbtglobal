<?php

namespace App\Modules\Admin\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\Routing\Controller;
use App\Modules\Admin\Models\Admin;
use Illuminate\Support\Facades\Route;

class AdminController extends Controller
{
    /**
    * The admin routes
    * @return Response
    */
    public static function routes()
    {
        LoginController::routes();
        
        Route::group(['middleware' => ['auth', 'admins'] ], function(){

            Route::get('/', function (){
                dd(Admin::all());
                return view('admin::home');
            })->name('admin.dashboard');
        });
    }
}
