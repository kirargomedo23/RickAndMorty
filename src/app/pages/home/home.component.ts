import { Page } from './../../interfaces/page';
import { Component, OnInit } from '@angular/core';
import { Character } from 'src/app/interfaces/character';
import { ApiService } from 'src/app/services/api.service';
import { PageEvent } from '@angular/material/paginator';
import { ObservablesActionService } from 'src/app/services/observables-action.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  character: Character [] = [];
  characterAux: Character [] = [];

  info: Page ;

  loading:boolean = true;

  length:number = 0;
  pageIndex:number = 1;

  constructor(
    private apiService: ApiService,
    private observableActionService: ObservablesActionService
  ) {
    this.info = {
      count: 0,
      next:'',
      pages:0,
      prev:''
    }
   }

  ngOnInit(): void {
    this.getCharacter();
    this.observableActionService.search$.subscribe(
      (resp) => {
        this.filterCharacters(resp);
      }
    );
  }

  getCharacter(){
    this.apiService.getCharacter(this.pageIndex).subscribe( (resp : any ) =>{
      this.info = resp.info;
      this.character = resp.results;
      this.characterAux = resp.results;
      this.loading = false;
    }, err => {

    });
  }

  handlePageEvent(event: PageEvent) {
    this.pageIndex = event.pageIndex+1;
    this.getCharacter();
  }

  filterCharacters(character:string){
    this.characterAux = this.character
    .filter(c => {
      let result = c.name.toLocaleLowerCase().includes(character.toLowerCase());
      if(result){
        return c;
      }else{
        return null;
      }
    } );

  }  


}
