<?php

use App\Http\Controllers\API\Auth\AuthController;
use App\Http\Controllers\API\ProfesseurController;
use App\Http\Controllers\API\StudentController;
use App\Http\Controllers\Auth\RegisteredUserController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

// Fetch the authenticated user
Route::middleware(['auth:sanctum'])->get('/user', function (Request $request) {
    return $request->user();
});

// Routes that require authorization
Route::middleware(['auth:sanctum'])->group(function () {
    // Student routes
    Route::get('/allstudents', [StudentController::class, 'getAllStudent']);
    Route::post('/student', [StudentController::class, 'store']);
    Route::delete('/students/{id}', [StudentController::class, 'destroy']);
    Route::put('/students/{id}', [StudentController::class, 'update']);
    Route::get('/students/{id}', [StudentController::class, 'show']);

    // Professeur routes
    Route::get('/allprofesseurs', [ProfesseurController::class, 'getAllProfesseurs']);
    Route::post('/professeur', [ProfesseurController::class, 'store']);
    Route::delete('/professeurs/{id}', [ProfesseurController::class, 'destroy']);
    Route::put('/professeurs/{id}', [ProfesseurController::class, 'update']);
    Route::get('/professeurs/{id}', [ProfesseurController::class, 'show']);
});

// Routes that do not require authorization
Route::post('/login', [AuthController::class, 'login']);
Route::post('/register', [RegisteredUserController::class, 'register']);
