/**
 * Ajoute une tâche à la TODO liste.
 * Retourne un nouveau tableau avec la tâche ajoutée.
 */
export const addTask = (todoList, task) => {
    return [...todoList, task];
};

/**
 * Supprime une tâche de la TODO Liste via son id.
 * Utilise filter pour retourner un nouveau tableau sans l'élément.
 */
export const removeTask = (todoList, taskId) => {
    return todoList.filter(task => task.id !== taskId);
};

/**
 * Modifie le status d'une tâche et retourne la TODO liste mise à jour.
 * Utilise map pour créer une copie modifiée de la tâche ciblée.
 */
export const updateTaskStatus = (todoList, taskId, newStatus) => {
    return todoList.map(task =>
        task.id === taskId
            ? { ...task, status: newStatus }
            : task
    );
};

/**
 * Filtre les tâches selon leur état (TODO, IN PROGRESS, DONE ou ALL).
 */
export const filterTasks = (todoList, statusFilter) => {
    if (statusFilter === 'ALL') return todoList;
    return todoList.filter(task => task.status === statusFilter);
};

/**
 * Calcule des statistiques (nombre total, terminées, restantes).
 * Utilise reduce pour parcourir le tableau une seule fois et construire l'objet de statistiques.
 */
export const getTaskStatistics = (todoList) => {
    return todoList.reduce(
        (stats, task) => {
            const isDone = task.status === 'DONE';
            return {
                total: stats.total + 1,
                done: isDone ? stats.done + 1 : stats.done,
                remaining: !isDone ? stats.remaining + 1 : stats.remaining,
            };
        },
        { total: 0, done: 0, remaining: 0 } // État initial de l'accumulateur
    );
};