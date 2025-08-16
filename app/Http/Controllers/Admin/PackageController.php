<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Package;
use Illuminate\Http\Request;
use Inertia\Inertia;

class PackageController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $packages = Package::orderBy('created_at', 'desc')->get();

        return Inertia::render('Admin/Packages/Index', [
            'packages' => $packages
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return Inertia::render('Admin/Packages/Create');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $validated = $request->validate([
            'name' => 'required|string|max:255',
            'description' => 'nullable|string',
            'price' => 'required|numeric|min:0',
            'duration_days' => 'required|integer|min:1',
            'features' => 'required|array',
            'max_employees' => 'nullable|integer|min:0',
            'max_customers' => 'nullable|integer|min:0',
            'max_products' => 'nullable|integer|min:0',
            'has_reports' => 'boolean',
            'has_analytics' => 'boolean',
            'has_api' => 'boolean',
            'has_support' => 'boolean',
            'is_popular' => 'boolean',
            'is_active' => 'boolean',
        ]);

        $validated['features'] = array_filter($validated['features']);

        Package::create($validated);

        return redirect()->route('admin.packages.index')
            ->with('success', 'تم إنشاء الباقة بنجاح');
    }

    /**
     * Display the specified resource.
     */
    public function show(Package $package)
    {
        return Inertia::render('Admin/Packages/Show', [
            'package' => $package
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Package $package)
    {
        return Inertia::render('Admin/Packages/Edit', [
            'package' => $package
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Package $package)
    {
        $validated = $request->validate([
            'name' => 'required|string|max:255',
            'description' => 'nullable|string',
            'price' => 'required|numeric|min:0',
            'duration_days' => 'required|integer|min:1',
            'features' => 'required|array',
            'max_employees' => 'nullable|integer|min:0',
            'max_customers' => 'nullable|integer|min:0',
            'max_products' => 'nullable|integer|min:0',
            'has_reports' => 'boolean',
            'has_analytics' => 'boolean',
            'has_api' => 'boolean',
            'has_support' => 'boolean',
            'is_popular' => 'boolean',
            'is_active' => 'boolean',
        ]);

        $validated['features'] = array_filter($validated['features']);

        $package->update($validated);

        return redirect()->route('admin.packages.index')
            ->with('success', 'تم تحديث الباقة بنجاح');
    }

    /**
     * Quick update for status toggle
     */
    public function quickUpdate(Request $request, Package $package)
    {
        $validated = $request->validate([
            'is_active' => 'boolean',
            'is_popular' => 'boolean',
        ]);

        $package->update($validated);

        return redirect()->back()
            ->with('success', 'تم تحديث حالة الباقة بنجاح');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Package $package)
    {
        $package->delete();

        return redirect()->route('admin.packages.index')
            ->with('success', 'تم حذف الباقة بنجاح');
    }
}
