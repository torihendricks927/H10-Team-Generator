const Intern = require('../lib/Intern');

describe("Intern", () => {
    describe("Initialization", () => {

        it("should get school", () => {

            const school = "Georgia Tech";
            const intern = new Intern("Tori", 100, "torihendricks927@yahoo.com", school);

            expect(intern.school).toBe(school);
        });

        describe("Getter methods", () => {
            it("should get school via getSchool()", () => {
    
                const school = "Georgia Tech";
    
                const intern = new Intern("Tori", 100, "torihendricks927@yahoo.com", school);
                const internSchool = intern.getSchool()
    
                expect(internSchool).toBe(school);
            });

            it("should get role via getRole()", () => {
    
                const role = "Intern";
    
                const intern = new Intern("Tori", 100, "torihendricks927@yahoo.com", "Georgia Tech", role);
                const internRole = intern.getRole();
    
                expect(internRole).toBe(role);
            });
        });

    });
});
