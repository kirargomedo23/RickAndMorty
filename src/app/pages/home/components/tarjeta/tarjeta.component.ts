import { Component, Input, OnInit } from '@angular/core';

import {Character} from '../../../../interfaces/character';

@Component({
  selector: 'app-tarjeta',
  templateUrl: './tarjeta.component.html',
  styleUrls: ['./tarjeta.component.scss']
})
export class TarjetaComponent implements OnInit {

  @Input() characters : Character [] ;

  constructor() { 
    this.characters = [];
    setTimeout(() => {
      console.log("chaaracter: ", this.characters);
    }, 2000);
  }

  ngOnInit(): void {
    
  }
}
