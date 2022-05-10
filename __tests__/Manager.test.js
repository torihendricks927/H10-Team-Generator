const Manager = require('../lib/Manager');

describe("Manager", () => {
    describe("Initialization", () => {

        it("should set office number via argument", () => {

            const officeNumber = 770
            const manager = new Manager("Tori", 100, "torihendricks927@yahoo.com", officeNumber);

            expect(manager.officeNumber).toBe(officeNumber);
        });

        describe("Getter methods", () => {
            it("should get office number via getOffice()", () => {
    
                const officeNumber = 770;
    
                const manager = new Manager("Tori", 100, "torihendricks927@yahoo.com", officeNumber);
                const managerOfficeNumber = manager.getOffice()
    
                expect(managerOfficeNumber).toBe(officeNumber);
            });

            it("should get role via getRole()", () => {
    
                const role = "Manager";
    
                const manager = new Manager("Tori", 100, "torihendricks927@yahoo.com", 770, role);
                const managerRole = manager.getRole();
    
                expect(managerRole).toBe(role);
            });
        });

    });
});
