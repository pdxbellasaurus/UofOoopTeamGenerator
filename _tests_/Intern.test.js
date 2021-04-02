const Intern = require("../lib/Intern");

describe('Intern', () => {
    describe('add school', () => {
        it("should add school to blueprint", () => {
            const school = 'WOU';
            const employee = new Intern("Paulo", 123, "test@email.com", school);
            expect(employee.school).toEqual(school);
        });
        
        describe('Test Methods', () => {
          it("should get office number getOfficeNumber()", () => {
              const school = 'PSU';
              const employee = new Intern("Piper", 723, "test@email.com", school);
              expect(employee.getSchool()).toBe(school);
            });

          it("should get role from getRole()", () => {
              const role = "Intern";
              const employee = new Intern("Britta", 505, "test@email.com", 'UofO');
              expect(employee.getRole()).toBe(role);
            });
        });
    });
});