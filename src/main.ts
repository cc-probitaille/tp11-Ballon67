import dotenv from 'dotenv';

dotenv.config();

export function creerClasse() {
    return class {
      constructor(private nom: String | undefined) {
        this.nom = nom || "Error";
      }

      public getNom(): String | undefined {
        return this.nom;
      }
    };
}

const ClasseReflective = creerClasse();
const instance = new ClasseReflective(process.env.NOM_CLASSE);
console.log(instance.getNom());
  