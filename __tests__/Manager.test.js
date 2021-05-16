const Manager = require('../lib/Manager');

test('Is a Manager object created?', () => {
    const manager = new Manager();
    expect(manager);
});

test('Can Manager name be set?', () => {
    const employeeName = 'Johnny Wu';
    const manager = new Manager(employeeName);
    expect(manager.employeeName).toBe(employeeName);
});

test('Can Manager ID be set?', () => {
    const id = '564645';
    const manager = new Manager('Johnny Wu', id);
    expect(manager.id).toBe(id);
});

test('Can Manager email be set?', () => {
    const email = 'johnny.wu@tech.com';
    const manager = new Manager('Johnny Wu', '564645', email);
    expect(manager.email).toBe(email);
});

test('Does getName() return the manager\'s name?', () => {
    const manager = new Manager('Johnny Wu', '564645', 'johnny.wu@tech.com');
    expect(manager.getName()).toBe('Johnny Wu');
});

test('Does getId() return the manager\'s ID?', () => {
    const manager = new Manager('Johnny Wu', '564645', 'johnny.wu@tech.com');
    expect(manager.getId()).toBe('564645');
});

test('Does getEmail() the manager\'s email?', () => {
    const manager = new Manager('Johnny Wu', '564645', 'johnny.wu@tech.com');
    expect(manager.getEmail()).toBe('johnny.wu@tech.com');
});

test('Does getRole() return the manager\'s role?', () => {
    const manager = new Manager('Johnny Wu', '564645', 'johnny.wu@tech.com');
    expect(manager.getRole()).toBe('Manager');
});

