<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;

class CustomerMiddleware
{
    public function handle(Request $request, Closure $next)
    {
        // التحقق من أن المستخدم هو عميل مدفوع الاشتراك
        if (!auth()->check()) {
            return redirect('/login')->with('error', 'يجب تسجيل الدخول للوصول لهذه الصفحة');
        }

        $user = auth()->user();

        // التحقق من صحة الاشتراك
        if ($user->type === 'customer' && !$user->hasActiveSubscription()) {
            return redirect('/pricing')->with('error', 'يجب تجديد الاشتراك للوصول لهذه الصفحة');
        }

        return $next($request);
    }
}
