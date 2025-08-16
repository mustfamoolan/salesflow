<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Admin\AdminController;
use App\Http\Controllers\Admin\PackageController;
use App\Http\Controllers\Admin\SiteSettingController;
use App\Http\Controllers\Landing\LandingController;

// صفحات الموقع العام
Route::get('/', [LandingController::class, 'index'])->name('home');
Route::get('/features', [LandingController::class, 'features'])->name('features');
Route::get('/pricing', [LandingController::class, 'pricing'])->name('pricing');
Route::get('/about', [LandingController::class, 'about'])->name('about');
Route::get('/contact', [LandingController::class, 'contact'])->name('contact');

// مسارات الأدمن
Route::get('/admin/login', [AdminController::class, 'login'])->name('admin.login');
Route::post('/admin/login', [AdminController::class, 'authenticate'])->name('admin.authenticate');

Route::middleware(['auth', 'admin'])->group(function () {
    Route::get('/admin/dashboard', [AdminController::class, 'dashboard'])->name('admin.dashboard');

    // إدارة الباقات
    Route::resource('/admin/packages', PackageController::class)->names([
        'index' => 'admin.packages.index',
        'create' => 'admin.packages.create',
        'store' => 'admin.packages.store',
        'show' => 'admin.packages.show',
        'edit' => 'admin.packages.edit',
        'update' => 'admin.packages.update',
        'destroy' => 'admin.packages.destroy',
    ]);
    Route::patch('/admin/packages/{package}/quick-update', [PackageController::class, 'quickUpdate'])->name('admin.packages.quick-update');

    // إعدادات الموقع
    Route::get('/admin/site-settings', [SiteSettingController::class, 'index'])->name('admin.site-settings.index');
    Route::post('/admin/site-settings', [SiteSettingController::class, 'update'])->name('admin.site-settings.update');
    Route::post('/admin/site-settings/reset', [SiteSettingController::class, 'reset'])->name('admin.site-settings.reset');
});
