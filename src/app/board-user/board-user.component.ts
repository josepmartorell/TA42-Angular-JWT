import { Component, OnInit, Input } from '@angular/core';
import { CharacterListComponent } from '../components/character-list/character-list.component';
import { CharactersService } from '../services/character.service';

import { Router } from '@angular/router';

@Component({
  selector: 'app-board-user',
  templateUrl: './board-user.component.html',
  styleUrls: ['./board-user.component.css']
})
export class BoardUserComponent extends CharacterListComponent implements OnInit {

  public page!: number; 
 
  @Input() override listing: Array<any> = []

  public load: boolean;//spinner


  constructor(characterService: CharactersService, public router: Router) { //incorporate the same parameters as the parent
    super(characterService); //provide argument to character service 
    this.load = false;//spinner
  }

  override ngOnInit(): void { //override modifier
    this.listCharacters() //call method to get all characters
    setTimeout(() => {//spinner
      this.load = true;
    }, 3000);

  }


 
}

