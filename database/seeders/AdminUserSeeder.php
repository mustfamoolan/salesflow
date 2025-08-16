<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\User;
use Illuminate\Support\Facades\Hash;

class AdminUserSeeder extends Seeder
{
    /**
     * Run the database seeder.
     */
    public function run(): void
    {
        User::create([
            'name' => 'مصطفى سعدي',
            'email' => 'admin@salesflow.com',
            'phone' => '07742209251',
            'password' => Hash::make('12345678'),
            'is_admin' => true,
            'email_verified_at' => now(),
        ]);
    }
}


