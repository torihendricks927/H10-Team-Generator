
const Employee = require('../lib/Employee');

describe("Employee", () => {
    describe("Initialization", () => {

        it("should instantiate an employee instance", () => {

            const employee = new Employee();

            expect(typeof(employee)).toBe("object");
        });

        it("should set name via constructor arguments", () => {

            const name = "Tori";

            const employee = new Employee(name);

            expect(employee.name).toBe(name);
        });

        it("should set id via constructor arguments", () => {

            const id = 100;

            const employee = new Employee("Tori", id);

            expect(employee.id).toBe(id);
        });

        it("should set email via constructor arguments", () => {

            const email = "torihendricks927@yahoo.com";

            const employee = new Employee("Tori", 100, email);

            expect(employee.email).toBe(email);
        });
    });

    describe("Getter methods", () => {
        it("should get name via getName()", () => {

            const name = "Tori";

            const employee = new Employee(name, 100, "torihendricks927@yahoo.com");
            const employeeName = employee.getName()

            expect(employeeName).toBe(name);
        });

        it("should get id via getId()", () => {

            const id = 100;

            const employee = new Employee("Tori", id, "torihendricks927@yahoo.com");
            const employeeId = employee.getId()

            expect(employeeId).toBe(id);
        });
        
        it("should get email via getEmail()", () => {

            const email = "Tori";

            const employee = new Employee("Tori", 100, email);
            const employeeEmail = employee.getEmail()

            expect(employeeEmail).toBe(email);
        });
        
        it("should get Role via getRole()", () => {

            const role = "Employee";

            const employee = new Employee("Tori", 100, "torihendricks927@yahoo.com");
            const employeeRole = employee.getRole()

            expect(employeeRole).toBe(role);
        });
        
    });
});


 