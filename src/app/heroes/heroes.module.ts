import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";


import { ListComponent } from "./list/list.component";
import { HeroComponent } from "./hero/hero.component";
import { AddCharacterComponent } from "../dbz/components/add-character/add-character.component";



@NgModule ({
  declarations: [
    HeroComponent,
    ListComponent,

  ],
  exports: [
    HeroComponent,
    ListComponent,

  ],
  imports: [
    CommonModule
  ]
})

export class HeroesModule{

}
