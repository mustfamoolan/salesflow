<?php

namespace App\Http\Controllers\Customer;

use App\Http\Controllers\Controller;
use Inertia\Inertia;

class CustomerController extends Controller
{
    public function dashboard()
    {
        return Inertia::render('Customer/Dashboard');
    }

    public function profile()
    {
        return Inertia::render('Customer/Profile');
    }

    public function subscription()
    {
        return Inertia::render('Customer/Subscription');
    }

    public function billing()
    {
        return Inertia::render('Customer/Billing');
    }

    public function transactions()
    {
        return Inertia::render('Customer/Transactions');
    }

    public function settings()
    {
        return Inertia::render('Customer/Settings');
    }

    public function support()
    {
        return Inertia::render('Customer/Support');
    }
}
