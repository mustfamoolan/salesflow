<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class SiteSetting extends Model
{
    protected $fillable = [
        'key',
        'value',
        'type',
        'category',
        'label',
        'description'
    ];

    protected $casts = [
        'value' => 'string'
    ];

    // Helper method to get setting value by key
    public static function getValue($key, $default = null)
    {
        $setting = self::where('key', $key)->first();
        return $setting ? $setting->value : $default;
    }

    // Helper method to set setting value
    public static function setValue($key, $value, $type = 'text', $category = 'general', $label = null, $description = null)
    {
        return self::updateOrCreate(
            ['key' => $key],
            [
                'value' => $value,
                'type' => $type,
                'category' => $category,
                'label' => $label ?: $key,
                'description' => $description
            ]
        );
    }

    // Get all settings grouped by category
    public static function getAllGrouped()
    {
        return self::all()->groupBy('category');
    }
}
