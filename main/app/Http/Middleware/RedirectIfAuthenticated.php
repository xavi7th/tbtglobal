<?php

namespace App\Http\Middleware;

use Closure;
use App\Modules\Admin\Models\Admin;
use Illuminate\Support\Facades\Auth;

class RedirectIfAuthenticated
{
	/**
	 * Handle an incoming request.
	 *
	 * @param  \Illuminate\Http\Request  $request
	 * @param  \Closure  $next
	 * @param  string|null  $guard
	 * @return mixed
	 */
	public function handle($request, Closure $next, $guard = null)
	{
		if (Auth::guard($guard)->check()) {
			return redirect()->route(Admin::dashboardRoute());
		}

		return $next($request);
	}
}
