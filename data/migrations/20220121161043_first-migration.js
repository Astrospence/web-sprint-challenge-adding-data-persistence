
exports.up = function(knex) {
  return knex.schema
    .createTable('projects', table => {
        table.increments('project_id')
        table.string('project_name', 128)
            .notNullable()
        table.text('project_description')
        table.boolean('project_completed')
            .defaultTo(false)
    })
    .createTable('resources', table => {
        table.increments('resource_id')
        table.string('resource_name')
            .notNullable()
            .unique()
        table.text('resource_description')
    })
    .createTable('tasks', table => {
        table.increments('task_id')
        table.text('task_description')
            .notNullable()
        table.text('task_notes')
        table.boolean('task_completed')
            .defaultTo(false)
        table.integer('project_id')
            .notNullable()
            .unsigned()
            .references('project_id')
            .inTable('projects')
            .onDelete('RESTRICT')
    })
    .createTable('project_resources', table => {
        table.increments('project_resources_id')
        table.integer('resource_id')
            .notNullable()
            .unsigned()
            .references('resource_id')
            .inTable('resources')
            .onDelete('RESTRICT')
        table.integer('project_id')
            .notNullable()
            .unsigned()
            .references('project_id')
            .inTable('projects')
            .onDelete('RESTRICT')
    })
}

exports.down = function(knex) {
  return knex.schema
    .dropTableIfExists('project_resources')
    .dropTableIfExists('tasks')
    .dropTableIfExists('resources')
    .dropTableIfExists('projects')
}
