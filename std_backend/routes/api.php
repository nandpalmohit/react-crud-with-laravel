<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\API\StudentController;




// add student
Route::post('/addstudent', [StudentController::class, 'store']);
// view student
Route::get('/viewstudent', [StudentController::class, 'index']);
// edit student
Route::get('/editstudent/{id}', [StudentController::class, 'edit']);
// update student
Route::put('updatestudent/{id}', [StudentController::class, 'update']);
// delete student
Route::delete('deletestudent/{id}', [StudentController::class, 'destroy']);



// login
// Route::post('login','App\Http\Controllers\Loginstd@login');



Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});