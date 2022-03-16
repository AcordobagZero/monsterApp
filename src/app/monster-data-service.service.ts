import { Injectable } from '@angular/core';
import { Monster, Raza } from './monster.model';

@Injectable({
  providedIn: 'root'
})
export class MonsterDataServiceService {


  misMonstruos: Monster[] = [
    new Monster("Thrall", 1000, Raza.Orco , 80),
    new Monster("Tyrande", 10000, Raza.Elfo, 150,),
    new Monster("Muradin", 7000, Raza.Enano ,120),
    new Monster("Gog'Mahr", 25000, Raza.Trasgo ,800),
  ];

  constructor() { }

  getMonsters(){
    return this.misMonstruos;
  }

  addMonster(m:Monster){
    this.misMonstruos.push(m);
  }

  saludar():void{
    alert("Hola");
  }

}
