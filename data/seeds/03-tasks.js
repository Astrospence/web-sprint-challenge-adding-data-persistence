
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('tasks').del()
    .then(function () {
      // Inserts seed entries
      return knex('tasks').insert([
        {task_description: 'Keep working hard and doing my best', task_notes: '', task_completed: false, project_id: 1},
        {task_description: 'Access the secret network of the Moon', task_notes: 'Follow instructions and learn from personal Alien communication', task_completed: false, project_id: 2},
        {task_description: 'Discover the secrets of the Moon', task_notes: 'Gain access to the secure vault database and report to Alien friends', task_completed: false, project_id: 2}
      ]);
    });
};
