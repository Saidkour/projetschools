<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Models\Professeur;
use Illuminate\Http\Request;

class ProfesseurController extends Controller
{
    public function getAllProfesseurs()
    {
        $professeurs = Professeur::all();
        return response()->json(['professeurs' => $professeurs]);
    }

    public function store(Request $request)
    {
        $request->validate([
            'first_name' => 'required|string|max:255',
            'last_name' => 'required|string|max:255',
            'email' => 'required|string|email|max:255|unique:professeurs',
            'birthday' => 'required|date',
            'phone' => 'required|string|max:15',
            'specialization' => 'required|string|max:255'
        ]);

        $professeur = Professeur::create($request->all());
        return response()->json($professeur, 201);
    }

    public function update(Request $request, $id)
    {
        $request->validate([
            'first_name' => 'required|string|max:255',
            'last_name' => 'required|string|max:255',
            'email' => 'required|string|email|max:255|unique:professeurs,email,'.$id,
            'birthday' => 'required|date',
            'phone' => 'required|string|max:15',
            'specialization' => 'required|string|max:255'
        ]);

        $professeur = Professeur::findOrFail($id);
        $professeur->update($request->all());
        return response()->json($professeur);
    }

    public function destroy($id)
    {
        Professeur::destroy($id);
        return response()->json(null, 204);
    }
}
