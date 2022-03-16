import { Component, OnInit } from '@angular/core';
import { MonsterDataServiceService } from '../monster-data-service.service';
import { Monster, Raza } from '../monster.model';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  ngOnInit(): void {
  }


  title = 'monsterApp';
  numero:number;

  misMonstruos: Monster[] = [
    new Monster("Thrall", 1000, Raza.Orco , 80),
    new Monster("Tyrande", 10000, Raza.Elfo, 150,),
    new Monster("Muradin", 7000, Raza.Enano ,120),
    new Monster("Gog'Mahr", 25000, Raza.Trasgo ,800),
  ];

  nombreMonstruo:string;
  vidaMonstruo:number;
  ataqueMonstruo:number;
  razaMonstruo:Raza;


  constructor(private monsterData:MonsterDataServiceService) {
    //this.agregarMonstruo("Nombre","1000","100","Trasgo");
    this.misMonstruos = this.monsterData.getMonsters();
  }

  addMonster(){
    this.monsterData.saludar();
    let monstruo:Monster = new Monster(this.nombreMonstruo, this.vidaMonstruo, this.razaMonstruo, this.ataqueMonstruo);

    this.monsterData.addMonster(monstruo);
    //this.misMonstruos.push(monstruo);

  }


}
