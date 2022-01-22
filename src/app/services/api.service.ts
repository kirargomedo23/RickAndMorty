import { Injectable } from '@angular/core';
import {environment} from '../../environments/environment';
import { HttpClient } from '@angular/common/http';



@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private url = environment.url;
  
  constructor(
    private http : HttpClient
  ) { }

  getCharacter(page:number){
    const url = `${this.url}character/?page=${page}`;

    return this.http.get( url );
  }
  

}
