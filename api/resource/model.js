const db = require('../../data/dbConfig')

const addResource = async (newResource) => {
    await db('resources').insert(newResource)

    return await db('resources')
        .where('resource_name', newResource.resource_name)
        .first() 
}

const getResources = async () => {
    return await db('resources')
}

module.exports = {
    addResource,
    getResources
}