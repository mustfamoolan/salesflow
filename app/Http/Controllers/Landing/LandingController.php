<?php

namespace App\Http\Controllers\Landing;

use App\Http\Controllers\Controller;
use App\Models\Package;
use App\Models\SiteSetting;
use Inertia\Inertia;

class LandingController extends Controller
{
    private function getSiteSettings()
    {
        $settings = SiteSetting::all();
        $formattedSettings = [];

        foreach ($settings as $setting) {
            $formattedSettings[$setting->key] = $setting->value;
        }

        return $formattedSettings;
    }

    public function index()
    {
        return Inertia::render('Landing/Home', [
            'siteSettings' => $this->getSiteSettings()
        ]);
    }

    public function features()
    {
        return Inertia::render('Landing/Features', [
            'siteSettings' => $this->getSiteSettings()
        ]);
    }

    public function pricing()
    {
        // جلب الباقات النشطة مرتبة حسب السعر
        $packages = Package::where('is_active', true)
            ->orderBy('price')
            ->get();

        return Inertia::render('Landing/Pricing', [
            'packages' => $packages,
            'siteSettings' => $this->getSiteSettings()
        ]);
    }

    public function about()
    {
        return Inertia::render('Landing/About', [
            'siteSettings' => $this->getSiteSettings()
        ]);
    }

    public function contact()
    {
        return Inertia::render('Landing/Contact', [
            'siteSettings' => $this->getSiteSettings()
        ]);
    }
}
