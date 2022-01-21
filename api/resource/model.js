const db = require('../../data/dbConfig')

const addResource = async (newResource) => {
    await db('resources').insert(newResource)

    const response = await db('resources')
        .where('resource_name', newResource.resource_name)
        .first()

    return response 
}

const getResources = async () => {
    return await db('resources')
}

module.exports = {
    addResource,
    getResources
}