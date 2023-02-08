export class User {
    constructor(
        public nom:string,
        public prenom:string,
        public email:string,
        public adresse:{
            adresse:string, 
            complementAdresse:string,
            codePostal:string,
            ville:string
        }
    ) {}
}
