import { Component, OnInit, Input } from '@angular/core';
import { CharacterListComponent } from '../components/character-list/character-list.component';
import { CharactersService } from '../services/character.service';

@Component({
  selector: 'app-board-user',
  templateUrl: './board-user.component.html',
  styleUrls: ['./board-user.component.css']
})
export class BoardUserComponent extends CharacterListComponent implements OnInit {
 
  @Input() override listing: Array<any> = []

  public load: boolean;//spinner


  constructor(characterService: CharactersService) { //incorporate the same parameters as the parent
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