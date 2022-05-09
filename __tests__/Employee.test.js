const employee = require('../lib/Employee');
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

            const id = 092796;

            const employee = new Employee("Tori", id);

            expect(employee.id).toBe(id);
        });

        it("should set email via constructor arguments", () => {

            const email = "torihendricks927@yahoo.com";

            const employee = new Employee("Tori", 092796, email);

            expect(employee.email).toBe(email);
        });
    });
});


 