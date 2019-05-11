<?php

namespace App\Modules\Admin\Http\Controllers;

use Illuminate\Http\Request;
use App\Modules\Admin\Models\Admin;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Route;
use Illuminate\Foundation\Auth\AuthenticatesUsers;

/**
 * 
 *  Login Controller
 * --------------------------------------------------------------------------
 *  This controller handles authenticating admins for the application and
 *  redirecting them to the admin dashboard screen. The controller uses a trait
 *  to conveniently provide its functionality to your applications.
 * 
 */
class LoginController extends Controller
{
  
  use AuthenticatesUsers;
  
  /**
  * Where to redirect admins after login.
  *
  * @var string
  */
  protected function redirectTo(){
      return route(Admin::dashboardRoute());
  }
  
  /**
  * Create a new controller instance.
  *
  * @return void
  */
  public function __construct(){
    $this->middleware('guest')->except('logout');
  }
  
  static function routes(){
      Route::get('login', 'LoginController@showLoginForm')->name('admin.login');
      Route::post('login', 'LoginController@login');
      Route::post('logout', 'LoginController@logout')->name('admin.logout');
  }
  
  /**
  * Show the application's login form.
  *
  * @return \Illuminate\Http\Response
  */
  public function showLoginForm(){
    return view('admin::auth.login');
  }
  
  /**
  * Validate the user login request.
  *
  * @param  \Illuminate\Http\Request  $request
  * @return void
  */
  protected function validateLogin(Request $request){
    dd($request->all());
    $this->validate($request, [
      $this->username() => 'required|string',
      'password' => 'required|string',
      ]);
    }
    
    /**
    * The user has been authenticated. We can redirect them to where we want or leave empty for the redirectto property to handle
    *
    * @param  \Illuminate\Http\Request  $request
    * @param  mixed  $user
    * @return mixed
    */
    protected function authenticated(Request $request, $user){
      return redirect()->route(Admin::dashboardRoute());
    }
    
    /**
    * Get the login username to be used by the controller.
    *
    * @return string
    */
    public function username(){
      return 'email';
    }
    
    /**
    * Log the user-dashboard out of the application.
    *
    * @param  \Illuminate\Http\Request  $request
    * @return \Illuminate\Http\Response
    */
    public function logout(Request $request)
    {
      $this->guard()->logout();
      
      $request->session()->invalidate();
      
      return redirect()->route('admin.login');
    }
    
  }
  