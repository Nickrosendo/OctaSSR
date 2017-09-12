import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';

import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { PartialsModule } from '../partials/partials.module';


@NgModule({
  imports: [
    BrowserModule,
    RouterModule,
    PartialsModule
  ],
	exports: [
    RouterModule,
		HeaderComponent,
		FooterComponent
	],
  declarations: [HeaderComponent, FooterComponent]
})
export class LayoutModule { }
