import { NgModule } from '@angular/core';

import { ContactRouting } from './contact-routing.module'
import { ContactComponent } from './contact.component';


@NgModule({
	imports: [
		ContactRouting
	],
	declarations: [
		ContactComponent
	]
})
export class ContactModule { }
