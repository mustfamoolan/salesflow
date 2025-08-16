<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class AdminMiddleware
{
    public function handle(Request $request, Closure $next)
    {
        // التحقق من أن المستخدم مسجل دخول وهو admin
        if (!Auth::check()) {
            return redirect('/admin/login')->with('error', 'يجب تسجيل الدخول أولاً');
        }

        // التحقق من أن المستخدم هو admin
        if (!Auth::user()->is_admin) {
            return redirect('/admin/login')->with('error', 'الوصول مقيد للمديرين فقط');
        }

        return $next($request);
    }
}
