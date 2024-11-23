import { creerClasse } from "../main";

const ClasseTest = creerClasse();

describe('Suite de tests', () => {
    it('Should create a class with the given name', () => {
        expect(typeof ClasseTest).toBeDefined();
        const instanceTest1 = new ClasseTest("test");
        const instanceTest2 = new ClasseTest(undefined);

        expect(instanceTest1.getNom()).toBe("test");
        expect(instanceTest2.getNom()).toBe("Error");
    });
});