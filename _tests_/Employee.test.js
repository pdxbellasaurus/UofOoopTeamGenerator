const { it } = require("@jest/globals");
const Employee = require("../lib/Employee");

describe("Employee Blueprint", () => {
    describe("Initialization", () => {
        // Positive test
        it("should create an Employee object", () => {
        // Arrange
        const employee = new Employee();
        // Assert
        expect(typeof(employee)).toBe("object");
    });
});

    describe("Employee Blueprint", () => {
        it("should add name to blueprint", () => {
        const name = "Poppy";
        const employee = new Employee(name);
        expect(employee.name).toBe(name);       
    });

    it("should add id to blueprint", () => {
        const id = 500;
        const employee = new Employee("Dakota", id);
        expect(employee.id).toBe(id);      
    });

    it("should add email to blueprint", () => {
        const email = "test@email.com";
        const employee = new Employee("Isa", 555, email);
        expect(employee.email).toBe(email);
    });
});

    describe("Employee methods", () => {
        it("should get namefrom getName()", () => {
        const name = "Niaj"; 
        const employee = new Employee(name);
        expect(employee.getName()).toBe(name);
    });

      it("should get id from getId()", () => {
        const id = 100;
        const employee = new Employee("Poppy", id);
        expect(employee.getId()).toBe(id);
    });

      it("should get email from getEmail()", () => {
        const email = "test@email.com";
        const employee = new Employee("Dakota", 123, email);
        expect(employee.getEmail()).toBe(email);
    });

      it("should get role from getRole(", () => {
        const role = "Employee";
        const employee = new Employee("Isa", 789, "test@email.com");
        expect(employee.getRole()).toBe(role);
    });
});
});
