import { Component, OnInit } from '@angular/core';
import { CharactersService } from 'src/app/services/character.service';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-character-details',
  templateUrl: './character-details.component.html',
  styleUrls: ['./character-details.component.css']
})
export class CharacterDetailsComponent implements OnInit {
  character: any;

  constructor(private characterService: CharactersService, public router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    let id = this.activatedRoute.snapshot.params['id'];
    this.characterService.get(id).subscribe(
      (res) => {
        this.character = res;
      },
      (error) => {
        console.log('Error al cargar datos', error);
      }
    );
  }

  updateCharacter(): void {

    this.characterService.update(this.character.id, this.character)
      .subscribe(
        response => {
          console.log(response);
          this.router.navigate(['user']);
        },
        error => {
          console.log(error);
        });
  }

  deleteCharacter() {
    this.characterService.delete(this.character.id)
      .subscribe(
        response => {
          console.log(response)
          this.router.navigate(['user']);
        },
        error => {
          console.log(error)
        }
      )
  }



}
