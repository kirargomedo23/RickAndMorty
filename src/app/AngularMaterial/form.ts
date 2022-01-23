import { NgModule } from '@angular/core';

import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
    declarations: [],
    imports: [],
    exports: [
      MatFormFieldModule, MatInputModule,FormsModule,
      MatSelectModule, ReactiveFormsModule
    ]
  })


export class FormModule { }