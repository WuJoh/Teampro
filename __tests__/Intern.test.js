const Intern = require('../lib/Intern');

test('Is an Intern object created?', () => {
    const intern = new Intern();
    expect(intern);
});

test('Can Intern name be set?', () => {
    const employeeName = 'Ivan Ku';
    const intern = new Intern(employeeName);
    expect(intern.employeeName).toBe(employeeName);
});

test('Can Intern ID be set?', () => {
    const id = '34565';
    const intern = new Intern('Ivan Ku', id);
    expect(intern.id).toBe(id);
});

test('Can Intern email be set?', () => {
    const email = 'ivan.ku@tech.com';
    const intern = new Intern('Ivan Ku', '34565', email);
    expect(intern.email).toBe(email);
});

test('Does getName() return the intern\'s name?', () => {
    const intern = new Intern('Ivan Ku', '34565', 'ivan.ku@tech.com');
    expect(intern.getName()).toBe('Ivan Ku');
});

test('Does getId() return the intern\'s ID?', () => {
    const intern = new Intern('Ivan Ku', '34565', 'ivan.ku@tech.com');
    expect(intern.getId()).toBe('34565');
});

test('Does getEmail() the intern\'s email?', () => {
    const intern = new Intern('Ivan Ku', '34565', 'ivan.ku@tech.com');
    expect(intern.getEmail()).toBe('ivan.ku@tech.com');
});

test('Does getRole() return the intern\'s role?', () => {
    const intern = new Intern('Ivan Ku', '34565', 'ivan.ku@tech.com');
    expect(intern.getRole()).toBe('Intern');
});

test('Does getSchool() return the intern\'s school?', () => {
    const intern = new Intern('Ivan Ku', '34565', 'ivan.ku@tech.com', 'Seneca College');
    expect(intern.getSchool()).toBe('Seneca College');
});

