import { Component, OnInit } from '@angular/core';
import { Character } from 'src/app/interfaces/character';
import { ApiService } from 'src/app/services/api.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  character: Character [] = [];

  loading:boolean = true;

  constructor(
    private apiService: ApiService
  ) { }

  ngOnInit(): void {
    this.getCharacter();
  }

  getCharacter(){
    this.apiService.getCharacter(1).subscribe( (resp : any ) =>{
      this.character = resp.results;
      this.loading = false;
    }, err => {

    });
  }


}
