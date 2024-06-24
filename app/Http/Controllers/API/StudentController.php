<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Http\Requests\Auth\LoginRequest;
use App\Models\student;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\Support\Facades\Auth;

class StudentController extends Controller
{
    public function getAllStudent() {
        $data=student::all();
       return response()->json(["students"=>$data]);
    }

    public function store(Request $request) {
        $request->validate([
            'first_name' => 'required|string|max:255',
            'last_name' => 'required|string|max:255',
            'email' => 'required|string|email|max:255|unique:students',
            'birthday' => 'required|date',
            'phone' => 'required|string|max:20',
            'company' => 'required|string|max:255',
        ]);

        $student = student::create($request->all());

        return response()->json([
            'message' => 'Student added successfully!',
            'student' => $student
        ], 201);
    }
    public function show ($id) {
        $student = Student::find($id);
    
        if (!$student) {
            return response()->json(['message' => 'Student not found'], 404);
        }
    
        return response()->json(['student' => $student]);
    }

    public function update(Request $request, $id) {
        $student = Student::find($id);
    
        if (!$student) {
            return response()->json(['message' => 'Student not found'], 404);
        }
    
        $request->validate([
            'first_name' => 'required|string|max:255',
            'last_name' => 'required|string|max:255',
            'email' => 'required|string|email|max:255|unique:students,email,' . $id,
            'birthday' => 'required|date',
            'phone' => 'required|string|max:20',
            'company' => 'required|string|max:255',
        ]);
    
        $student->update($request->all());
    
        return response()->json([
            'message' => 'Student updated successfully!',
            'student' => $student
        ], 200);
    }
    

    public function destroy($id) {
        $student = Student::find($id);

        if (!$student) {
            return response()->json(['message' => 'Student not found'], 404);
        }

        $student->delete();

        return response()->json(['message' => 'Student deleted successfully']);
    }
}