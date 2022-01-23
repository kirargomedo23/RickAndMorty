import { Component, OnDestroy, OnInit } from '@angular/core';
import { fromEvent } from 'rxjs/internal/observable/fromEvent';
import { Subscription } from 'rxjs/internal/Subscription';
import { debounceTime } from 'rxjs/operators';
import { ObservablesActionService } from 'src/app/services/observables-action.service';

@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.component.html',
  styleUrls: ['./buscador.component.scss']
})
export class BuscadorComponent implements OnInit, OnDestroy {

  idSubscription:Subscription = new Subscription;

  constructor(
    private observableActionService: ObservablesActionService
  ) { 
    
  }

  ngOnInit(): void {
    
  }

  search(value: string){
    const fromEvent$ = fromEvent(document, 'change');
    this.idSubscription = fromEvent$.pipe(debounceTime(500)).subscribe(() => {
      this.observableActionService.searchCharacter(value);
    })
  }

  ngOnDestroy(): void {
    this.idSubscription.unsubscribe();
  }


}
