import { Component, OnInit } from '@angular/core';
import { Character } from '../interfaces/character.interface';

@Component({
  selector: 'app-dbz-main-page',
  standalone: false,
  templateUrl: './main-page.component.html'
})

export class MainPageComponent {

  public character: Character[] = [{
    name: 'krillin',
    power: 1000
  }, {
    name: 'Goku',
    power: 9500
  }, {
    name: 'Vegueta',
    power: 7500
  }];
}
