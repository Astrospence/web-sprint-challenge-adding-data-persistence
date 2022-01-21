const db = require('../../data/dbConfig')

const addTask = async (newTask) => {
    await db('tasks').insert(newTask)

    const response = await db('tasks')
        .where('task_description', newTask.task_description)
        .orderBy('task_id', 'desc')
        .first()

    if (response.task_completed === 0 || !response.task_completed) {
        return {
            ...response,
            task_completed: false
        }
    } else {
        return {
            ...response,
            task_completed: true
        }
    }
}

const getTasks = async () => {
    const response = await db.select('t.task_id', 't.task_description', 't.task_notes', 't.task_completed', 'p.project_name', 'p.project_description')
        .from('tasks as t')
        .leftJoin('projects as p', 't.project_id', '=', 'p.project_id')

    return response.map(task => {
        if (task.task_completed === 0 || !task.task_completed) {
            return {
                ...task,
                task_completed: false
            }
        } else {
            return {
                ...task,
                task_completed: true
            }
        }
    })
}

module.exports = {
    addTask,
    getTasks
}