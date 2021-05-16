const Employee = require('../lib/Employee');

test('Is an Employee object created?', () => {
    const employee = new Employee();
    expect(employee);
});

test('Can Employee name be set?', () => {
    const employeeName = 'Vincent Du';
    const employee = new Employee(employeeName);
    expect(employee.employeeName).toBe(employeeName);
});

test('Can Employee ID be set?', () => {
    const id = '02191999';
    const employee = new Employee('Vincent Du', id);
    expect(employee.id).toBe(id);
});

test('Can Employee email be set?', () => {
    const email = 'peter.gibbons@initech.com';
    const employee = new Employee('Vincent Du', '23423', email);
    expect(employee.email).toBe(email);
});

test('Does getName() return the employee\'s name?', () => {
    const employee = new Employee('Vincent Du', '23423', 'vincent.du@tech.com');
    expect(employee.getName()).toBe('Vincent Du');
});

test('Does getId() return the employee\'s ID?', () => {
    const employee = new Employee('Vincent Du', '23423', 'vincent.du@tech.com');
    expect(employee.getId()).toBe('23423');
});

test('Does getEmail() the employee\'s email?', () => {
    const employee = new Employee('Vincent Du', '23423', 'vincent.du@tech.com');
    expect(employee.getEmail()).toBe('vincent.du@tech.com');
});

test('Does getRole() return the employee\'s role?', () => {
    const employee = new Employee('Vincent Du', '23423', 'vincent.du@tech.com');
    expect(employee.getRole()).toBe('Employee');
});