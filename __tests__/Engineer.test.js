const Engineer = require('../lib/Engineer');

test('creates a named engineer object', () => {
  const engineer = new Engineer('Chris', 1234, 'christ@chrisy.com', 'chrisgithub');

  expect(engineer.name).toEqual('Chris');
  expect(engineer.id).toEqual(1234);
  expect(engineer.email).toEqual('christ@chrisy.com');
  expect(engineer.github).toEqual('chrisgithub');
})