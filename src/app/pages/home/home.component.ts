import { Page } from './../../interfaces/page';
import { Component, OnInit } from '@angular/core';
import { Character } from 'src/app/interfaces/character';
import { ApiService } from 'src/app/services/api.service';
import { PageEvent } from '@angular/material/paginator';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  character: Character [] = [];
  info: Page ;

  loading:boolean = true;

  length:number = 0;
  pageIndex:number = 1;

  constructor(
    private apiService: ApiService
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
    
  }

  getCharacter(){
    this.apiService.getCharacter(this.pageIndex).subscribe( (resp : any ) =>{
      this.info = resp.info;
      this.character = resp.results;
      this.loading = false;
      this.calculatePages();
    }, err => {

    });
  }

  handlePageEvent(event: PageEvent) {
    this.pageIndex = event.pageIndex+1;
    this.getCharacter();
  }

  calculatePages(){
    this.length = parseInt((this.info.count / 20).toString());
  }


}
