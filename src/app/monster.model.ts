export enum Raza{
  Orco = "Orco",
  Enano = "Enano",
  Elfo = "Elfo",
  Trasgo = "Trasgo",
}

export class Monster {
  nombre:string = "";
  vida:number = 0;
  raza:Raza;
  ataque:number = 0;

  constructor(nom:string, vida:number, raza:Raza, ataque:number){
    this.nombre = nom;
    this.vida = vida;
    this.raza = raza;
    this.ataque = ataque;
  }

  atacar():void{

  }

  ataqueEspecial():void{

  }


  isAlianza():boolean {
    return this.raza == 'Elfo' || this.raza == 'Enano';
  }

  isOrda():boolean{
    return this.raza == 'Orco' || this.raza == 'Trasgo';
  }
}
