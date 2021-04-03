const Manager = require('../lib/Manager');

test('creates a named manager object', () => {
  const manager = new Manager('Mary',7654, 'mary@email.com', 8888888888 );

  expect(manager.name).toEqual('Mary');
  expect(manager.id).toEqual(7654);
  expect(manager.email).toEqual('mary@email.com');
  expect(manager.officenumber).toEqual(8888888888);
  expect(manager.getRole()).toEqual("Manager");
})