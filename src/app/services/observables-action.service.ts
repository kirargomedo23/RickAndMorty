import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ObservablesActionService {

  private search = new BehaviorSubject<string>('');
  public search$ = this.search.asObservable();


  constructor() { }


  searchCharacter(search:string){
    this.search.next(search);
  }

}
