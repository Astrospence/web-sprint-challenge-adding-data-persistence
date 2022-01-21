const db = require('../../data/dbConfig')

const addProject = async (newProject) => {
    await db('projects').insert(newProject)

    const response = await db('projects')
        .where('project_name', newProject.project_name)
        .orderBy('project_id', 'desc')
        .first()

    return response
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