const Engineer = require("../lib/Engineer");

describe('Engineer', () => {
    describe('add Github account', () => {
        it("should add Github account to blueprint", () => {
            const github = 'gitusername';
            const employee = new Engineer("Jose", 206, "test@email.com", github);
            expect(employee.github).toEqual(github);
        });
        
        describe('Test Methods', () => {
          it("should get office number getOfficeNumber()", () => {
              const github = 'gitusername';
              const employee = new Engineer("Piper", 522, "test@email.com", github);
              expect(employee.getGithub()).toBe(github);
            });

          it("should get role from getRole()", () => {
              const role = "Engineer";
              const employee = new Engineer("Bob", 355, "test@email.com", 'gituser');
              expect(employee.getRole()).toBe(role);
            });
        });
    });
});