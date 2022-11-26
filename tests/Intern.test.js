const Employee = require('../lib/intern');

test('Check engineer name', () => {
  const name = 'Joseph';
  const e = new Employee(name);
  expect(e.name).toBe(name);
});

test('Check employee class id', () => {
  const id = '10';
  const e = new Employee('Random', id);
  expect(e.id).toBe(id);
});

test('Check employee class email', () => {
  const email = 'josephpicardat@awesome.com';
  const e = new Employee('Random', 1, email);
  expect(e.email).toBe(email);
});

test('Check employee class school', () => {
  const school = 'daSchool';
  const e = new Employee('Random', 1, 'josephpicardat@awesome.com', school);
  expect(e.school).toBe(school);
});

test('Does getName() return name?', () => {
  const newname = 'Joseph';
  const name = new Employee(newname);
  const e = name.getName();
  expect(e).toBe(newname);
});

test('Does getId() return id?', () => {
  const newId = 1;
  const id = new Employee('Random', newId);
  const e = id.getId();
  expect(e).toBe(newId);
});

test('Does getEmail() return email?', () => {
  const newemail = 'josephpicardat@awesome.com';
  const email = new Employee('Random', 1, newemail);
  const e = email.getEmail();
  expect(e).toBe(newemail);
});

test('Does getSchool() return School?', () => {
  const getSchool = 'daSchool';
  const School = new Employee(
    'Random',
    1,
    'josephpicardat@awesome.com',
    getSchool,
  );
  const e = School.getSchool();
  expect(e).toBe(getSchool);
});

test('Does getRole() return role?', () => {
  const e = new Employee().getRole();
  expect(e).toBe('Intern');
});
