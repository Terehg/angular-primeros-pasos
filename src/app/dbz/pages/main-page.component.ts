import { DbzService } from './../services/dbz.service';
import { Component, OnInit } from '@angular/core';
import { Character } from '../interfaces/character.interface';

@Component({
  selector: 'app-dbz-main-page',
  templateUrl: './main-page.component.html'
})

export class MainPageComponent {

 constructor( private DbzService: DbzService){}


  get characters(): Character[]{
    return [...this.DbzService.characters]
  }

  onDelete (id: string){
    this.DbzService.deleteCharacterById(id);
  }

  onNewCharacter(character: Character){
    this.DbzService.addCharacter(character);
  }
}
