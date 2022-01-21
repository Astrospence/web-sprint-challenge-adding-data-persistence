const db = require('../../data/dbConfig')

const addResource = async (newResource) => {
    await db('resources').insert(newResource)
    
    const response = await db('*')
        .from('resources')
        .where('resource_name', newResource.resource_name)
        .first()

    return response 
}

const getResources = async () => {
    const response = await db('*')
        .from('resources')

    return response
}

module.exports = {
    addResource,
    getResources
}