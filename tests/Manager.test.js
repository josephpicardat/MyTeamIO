const Employee = require('../lib/manager');

test('Check employee class name', () => {
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

test('Check employee class officeNumber', () => {
  const officeNumber = 15;
  const e = new Employee(
    'Random',
    1,
    'josephpicardat@awesome.com',
    officeNumber,
  );
  expect(e.officeNumber).toBe(officeNumber);
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

test('Does getRole() return role?', () => {
  const e = new Employee().getRole();
  expect(e).toBe('Manager');
});

test('Does getOfficeNumber() return email?', () => {
  const newOfficeNumber = 723;
  const officeNumber = new Employee(
    'Random',
    1,
    'josephpicardat@awesome.com',
    newOfficeNumber,
  );
  const e = officeNumber.getOfficeNumber();
  expect(e).toBe(newOfficeNumber);
});
