const Employee = require('../lib/Employee');

test('creates a named employee object', () => {
  const employee = new Employee('Bob',9876, 'bob@email.com' );

  expect(employee.name).toEqual('Bob');
  expect(employee.id).toEqual(9876);
  expect(employee.email).toEqual('bob@email.com');
  expect(employee.getRole()).toEqual("Employee");
})