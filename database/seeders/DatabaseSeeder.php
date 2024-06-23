<?php

namespace Database\Seeders;

use App\Models\User;
// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        User::factory(10)->create();

        User::factory()->create([
            'name' => 'said User',
            'role' => 'admin',
            'email' => 'said@example.com',
            "password" => '123456'
        ]);
        User::factory()->create([
            'name' => 'said User',
            'role' => 'user',
            'email' => 'user@example.com',
            "password" => '123456'
        ]);
    }
}
