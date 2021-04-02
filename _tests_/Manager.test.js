const Manager = require("../lib/Manager");

describe('Manager', () => {
    describe('add office number', () => {
        it("should add office number to blueprint", () => {
            const office = 3001;
            const employee = new Manager("Jose", 200, "test@email.com", office);
            expect(employee.officeNumber).toEqual(office);
        });
        
        describe('Test Methods', () => {
          it("should get office number getOfficeNumber()", () => {
              const office = 4001;
              const employee = new Manager("Pierre", 404, "test@email.com", office);
              expect(employee.getOfficeNumber()).toBe(office);
            });

          it("should get role from getRole()", () => {
              const role = "Manager";
              const employee = new Manager("Hans", 300, "test@email.com", 5001);
              expect(employee.getRole()).toBe(role);
            });
        });
    });
});