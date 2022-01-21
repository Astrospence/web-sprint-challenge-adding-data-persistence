
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('projects').del()
    .then(function () {
      // Inserts seed entries
      return knex('projects').insert([
        {project_name: 'Finish BloomTech School', project_description: '', project_completed: false},
        {project_name: 'Hack Dark Side of the Moon High Security Vault', project_description: 'Access the secure secret network and dig in to find what kind of alien tech they are keeping there', project_completed: false}
      ]);
    });
};
