const Engineer = require('../lib/Engineer');

describe("Engineer", () => {
    describe("Initialization", () => {

        it("should display github", () => {

            const github = "torihendricks";
            const engineer = new Engineer("Tori", 100, "torihendricks927@yahoo.com", github);

            expect(engineer.github).toBe(github);
        });

        describe("Getter methods", () => {
            it("should get github via getGithub()", () => {
    
                const github = "torihendricks";
    
                const engineer = new Engineer("Tori", 100, "torihendricks927@yahoo.com", github);
                const engineerGithub = engineer.getGithub()
    
                expect(engineerGithub).toBe(github);
            });

            it("should get role via getRole()", () => {
    
                const role = "Engineer";
    
                const engineer = new Engineer("Tori", 100, "torihendricks927@yahoo.com", "torihendricks", role);
                const engineerRole = engineer.getRole();
    
                expect(engineerRole).toBe(role);
            });
        });

    });
});
