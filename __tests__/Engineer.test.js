const Engineer = require('../lib/Engineer');

test('Is an Engineer object created?', () => {
    const engineer = new Engineer();
    expect(engineer);
});

test('Can Engineer name be set?', () => {
    const employeeName = 'Michael Vu';
    const engineer = new Engineer(employeeName);
    expect(engineer.employeeName).toBe(employeeName);
});

test('Can Engineer ID be set?', () => {
    const id = '564645';
    const engineer = new Engineer('Michael Yu', id);
    expect(engineer.id).toBe(id);
});

test('Can Engineer email be set?', () => {
    const email = 'michael.yu@tech.com';
    const engineer = new Engineer('Michael Yu', '564645', email);
    expect(engineer.email).toBe(email);
});

test('Does getName() return the engineer\'s name?', () => {
    const engineer = new Engineer('Michael Yu', '564645', 'michael.yu@tech.com');
    expect(engineer.getName()).toBe('Michael Yu');
});

test('Does getId() return the engineer\'s ID?', () => {
    const engineer = new Engineer('Michael Yu', '564645', 'michael.yu@tech.com');
    expect(engineer.getId()).toBe('564645');
});

test('Does getEmail() the engineer\'s email?', () => {
    const engineer = new Engineer('Michael Yu', '564645', 'michael.yu@tech.com');
    expect(engineer.getEmail()).toBe('michael.yu@tech.com');
});

test('Does getRole() return the engineer\'s role?', () => {
    const engineer = new Engineer('Michael Yu', '564645', 'michael.yu@tech.com');
    expect(engineer.getRole()).toBe('Engineer');
});

test('Does getGithub() return the engineer\'s GitHub username?', () => {
    const engineer = new Engineer('Michael Yu', '564645', 'michael.yu@tech.com', 'MichaelYu');
    expect(engineer.getGithub()).toBe('MichaelYu');
});

