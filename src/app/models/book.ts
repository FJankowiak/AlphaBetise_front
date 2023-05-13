export class Book {
 constructor(public codeEAN:number,
    public codeISBN:string,
    public titre: string,
    public images: string,
    public resume: string,
    public collection:string,
    public dateParution: Date,
    public quantite: number,
    public prix: number,
    public editeur: string,
    public auteurs:string,
    public notesBiographiques:string,
    public mainImgUrl:string

  ) { }

}

