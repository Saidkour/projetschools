<?php

use App\Http\Controllers\Auth\AuthenticatedSessionController;
use Illuminate\Support\Facades\Route;

Route::get('/', function () {
    return ['Laravel' => app()->version()];
});
Route::middleware('web')->group(function () {
    Route::get('/sanctum/csrf-cookie', function () {
        return response()->json(['message' => 'CSRF token generated']);
    });

    Route::post('/login', [AuthenticatedSessionController::class, 'login']);
    // Other routes that need CSRF protection
});
require __DIR__.'/auth.php';
