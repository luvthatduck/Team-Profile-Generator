const Intern = require('../lib/Intern');

test('creates a named intern object', () => {
  const intern = new Intern('Larry', 56, 'larry@larry.com', 'UofU');
console.log(intern.getRole)
  expect(intern.name).toEqual('Larry');
  expect(intern.id).toEqual(56);
  expect(intern.email).toEqual('larry@larry.com');
  expect(intern.getSchool()).toEqual('UofU');
  expect(intern.getRole()).toEqual("Intern");
})