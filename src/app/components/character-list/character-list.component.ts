import { Component, OnInit } from '@angular/core';
import { CharactersService } from 'src/app/services/character.service';

@Component({
  selector: 'app-character-list',
  templateUrl: './character-list.component.html',
  styleUrls: ['./character-list.component.css']
})
export class CharacterListComponent implements OnInit {

  listing: Array<any> = []


  constructor(private characterService: CharactersService) { } //necessary encapsulation

  ngOnInit(): void {
    this.listCharacters();
  }

  listCharacters() {
    this.characterService.getAll()
      .subscribe(res => {
        this.listing = res;
        console.log(res);
        const code = 5;
        console.error('error', code); // Prints: error 5, to stderr
      });


  }
}
