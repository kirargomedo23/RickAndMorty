import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';

import {FooterComponent} from '../../shared/footer/footer.component';
import {NavbarComponent} from '../../shared/navbar/navbar.component';


import {CargaModule} from '../../AngularMaterial/carga'
import {CardModule} from '../../AngularMaterial/card';
import { TarjetaComponent } from './components/tarjeta.component';
import {GridModule} from '../../AngularMaterial/grid';

@NgModule({
  declarations: [
    HomeComponent, FooterComponent, NavbarComponent, TarjetaComponent
  ],
  imports: [
    CommonModule, HomeRoutingModule,
    CargaModule, CardModule, GridModule
  ]
})
export class HomeModule { }
