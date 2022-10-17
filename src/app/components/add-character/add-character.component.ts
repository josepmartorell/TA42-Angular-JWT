import { Component, OnInit } from '@angular/core';
import { CharactersService } from 'src/app/services/character.service';
import { Character } from 'src/app/interfaces/character.interface';

import { Router } from '@angular/router';

@Component({
  selector: 'app-add-character',
  templateUrl: './add-character.component.html',
  styleUrls: ['./add-character.component.css']
})
export class AddCharacterComponent implements OnInit {


  default: string = 'https://www.pngall.com/wp-content/uploads/12/Avatar-Profile-Vector-PNG-File.png'

  character: Character = {
    name: '',
    status: '',
    species: '',
    gender: '',
    origin: '',
    image: this.default

  }

  constructor(private characterService: CharactersService, public router: Router) { }

  ngOnInit(): void {
  }

  saveCharacter(){
    const data = {
      name: this.character.name,
      status: this.character.name,
      species: this.character.species,
      gender: this.character.gender,
      origin: this.character.origin,
      image: this.character.image

    }

    this.characterService.create(data)
      .subscribe(res => {
        console.log(res);
        this.router.navigate(['/user'])
        //if error
        console.error('error');
      });


  }



}
