<?php

namespace App\Http\Controllers\Formateur;

use App\Models\Note;
use App\Models\Formation;
use App\Models\Discipline;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class NoteController extends Controller
{
    public function showNotes(Request $request)
    {
        $formateurId = auth()->user()->id;

        // Charger toutes les formations du formateur avec leurs disciplines et apprenants
        $formationsRaw = Formation::whereHas('formateurs', function ($query) use ($formateurId) {
            $query->where('formateur_id', $formateurId);
        })
            ->with([
                'disciplines',
                'apprenants' => function ($query) {
                    $query->with(['notes' => function ($query) {
                        $query->select('id', 'apprenant_id', 'formation_id', 'discipline_id', 'note');
                    }]);
                }
            ])
            ->get();

        // Déterminer la formation sélectionnée par défaut avant transformation
        $selectedFormationId = $formationsRaw->isNotEmpty() ? $formationsRaw->first()->id : null;

        // Transformer les données pour Inertia
        $formations = $formationsRaw->map(function ($formation) {
            return [
                'id' => $formation->id,
                'titre' => $formation->titre,
                'disciplines' => $formation->disciplines->map(fn($discipline) => [
                    'id' => $discipline->id,
                    'nom' => $discipline->nom,
                ]),
                'apprenants' => $formation->apprenants->map(function ($apprenant) use ($formation) {
                    $notes = $apprenant->notes->where('formation_id', $formation->id)
                        ->mapWithKeys(fn($note) => [$note->discipline_id => $note->note]);
                    return [
                        'id' => $apprenant->id,
                        'nom' => $apprenant->nom,
                        'prenom' => $apprenant->prenom,
                        'notes' => $notes->all(),
                    ];
                }),
            ];
        });

        return inertia('Formateurs/Notes/Index', [
            'formations' => $formations,
            'selectedFormation' => $selectedFormationId,
        ]);
    }

    public function updateNote(Request $request)
    {
        $request->validate([
            'apprenant_id' => 'required|exists:apprenants,id',
            'formation_id' => 'required|exists:formations,id',
            'discipline_id' => 'required|exists:disciplines,id',
            'note' => 'required|numeric|min:0|max:20',
        ]);

        $formateurId = auth()->user()->id;
        $formation = Formation::where('id', $request->formation_id)
            ->whereHas('formateurs', function ($query) use ($formateurId) {
                $query->where('formateur_id', $formateurId);
            })->firstOrFail();

        if (!$formation->disciplines()->where('discipline_id', $request->discipline_id)->exists()) {
            return redirect()->back()->withErrors(['discipline_id' => 'Cette discipline n’est pas associée à la formation.']);
        }

        Note::updateOrCreate(
            [
                'apprenant_id' => $request->apprenant_id,
                'formation_id' => $request->formation_id,
                'discipline_id' => $request->discipline_id,
            ],
            ['note' => $request->note]
        );

        return redirect()->back()->with('success', 'Note mise à jour avec succès.');
    }

}
