<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Student;

class StudentController extends Controller
{

    // insert data
    public function store(Request $req)
    {
        $std = new Student;
        $std->name = $req->input('name');
        $std->email = $req->input('email');
        $std->branch = $req->input('branch');
        $std->sem = $req->input('sem');
        $std->save();

        return response()->json([
            'status'=> 200 ,
            'message'=> 'Student Added !!'
        ]);
    }
    
    // dusplay data
    public function index(){
        $students = Student::all();
        return response()->json([
            'status'=> 200,
            'students'=> $students
        ]);
    } 

    // edit data
    public function edit($id)
    {
        $student = Student::find($id);
        return response()->json([
            'status'=> 200,
            'message' => $student,
        ]);
    }

    // update data
    public function update(Request $req, $id)
    {
        $std = Student::find($id);
        $std->name = $req->input('name');
        $std->email = $req->input('email');
        $std->branch = $req->input('branch');
        $std->sem = $req->input('sem');
        $std->update();

        return response()->json([
            'status'=> 200 ,
            'message'=> 'Student Updated !!'
        ]);
    }

    // delete student
    public function destroy($id)
    {
        $student = Student::find($id);
        $student->delete();
        
        return response()->json([
            'status'=> 200 ,
            'message'=> 'Student Deleted !!'
        ]);
    }
}