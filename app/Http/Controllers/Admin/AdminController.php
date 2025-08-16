<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Redirect;
use Inertia\Inertia;

class AdminController extends Controller
{
    public function login()
    {
        return Inertia::render('Admin/Login');
    }

    public function authenticate(Request $request)
    {
        $credentials = $request->validate([
            'phone' => 'required|string',
            'password' => 'required',
        ]);

        if (Auth::attempt($credentials, $request->boolean('remember'))) {
            $request->session()->regenerate();

            // Check if user is admin
            if (Auth::user()->is_admin) {
                return redirect()->intended('/admin/dashboard');
            } else {
                Auth::logout();
                return back()->withErrors([
                    'phone' => 'ليس لديك صلاحية للوصول إلى لوحة التحكم.',
                ]);
            }
        }

        return back()->withErrors([
            'phone' => 'بيانات الدخول غير صحيحة.',
        ]);
    }

    public function logout(Request $request)
    {
        Auth::logout();
        $request->session()->invalidate();
        $request->session()->regenerateToken();

        return redirect('/admin/login');
    }

    public function dashboard()
    {
        return Inertia::render('Admin/Dashboard');
    }
}
