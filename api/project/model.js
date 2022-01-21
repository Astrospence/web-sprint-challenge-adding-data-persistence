const db = require('../../data/dbConfig')

const addProject = async (newProject) => {
    await db('projects').insert(newProject)

    const response = await db('projects')
        .where('project_name', newProject.project_name)
        .orderBy('project_id', 'desc')
        .first()

    if (response.project_completed === 0 || !response.project_completed) {
        return {
            ...response,
            project_completed: false
        }
    } else {
        return {
            ...response,
            project_completed: true
        }
    }
}

const getProjects = async () => {
    const projects = await db('projects')

    return projects.map(project => {
        if (project.project_completed) {
            return {
                ...project,
                project_completed: true
            }
        } else {
            return {
                ...project,
                project_completed: false
            }
        }
    })
}

module.exports = {
    addProject,
    getProjects
}