
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('resources').del()
    .then(function () {
      // Inserts seed entries
      return knex('resources').insert([
        {resource_name: 'BloomTech Courses', resource_description: 'As a beginner, it is all here!'},
        {resource_name: 'Web Docs', resource_description: 'The world is my book'},
        {resource_name: 'Personal Comm-link to Alien World', resource_description: 'Not supposed to talk about this...'}
      ]);
    });
};
