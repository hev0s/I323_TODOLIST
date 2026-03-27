import { describe, it, expect } from 'vitest';
import {
    addTask,
    removeTask,
    updateTaskStatus,
    filterTasks,
    getTaskStatistics
} from './ToDoList';

describe('Gestionnaire de tâches (Fonctionnel)', () => {

    // État initial immuable pour nos tests
    const initialState = [
        { id: 1, titre: "Apprendre Vitest", status: "DONE" },
        { id: 2, titre: "Créer des fonctions pures", status: "IN PROGRESS" }
    ];

    it('devrait ajouter une tâche sans modifier la liste originale', () => {
        const newTask = { id: 3, titre: "Faire une pause", status: "TODO" };
        const newState = addTask(initialState, newTask);

        expect(newState).toHaveLength(3);
        expect(newState[2]).toEqual(newTask);
        // Vérification de l'immutabilité
        expect(initialState).toHaveLength(2);
    });

    it('devrait supprimer une tâche via son id', () => {
        const newState = removeTask(initialState, 1);

        expect(newState).toHaveLength(1);
        expect(newState[0].id).toBe(2);
    });

    it('devrait modifier le statut dune tâche', () => {
        const newState = updateTaskStatus(initialState, 2, "DONE");

        expect(newState[1].status).toBe("DONE");
        // L'objet original ne doit pas être muté
        expect(initialState[1].status).toBe("IN PROGRESS");
    });

    it('devrait filtrer les tâches selon leur état', () => {
        const todoState = [
            ...initialState,
            { id: 3, titre: "Tâche 3", status: "TODO" }
        ];

        expect(filterTasks(todoState, "DONE")).toHaveLength(1);
        expect(filterTasks(todoState, "IN PROGRESS")).toHaveLength(1);
        expect(filterTasks(todoState, "TODO")).toHaveLength(1);
        expect(filterTasks(todoState, "ALL")).toHaveLength(3);
    });

    it('devrait calculer correctement les statistiques', () => {
        const stats = getTaskStatistics(initialState);

        expect(stats).toEqual({
            total: 2,
            done: 1,
            remaining: 1
        });
    });

});