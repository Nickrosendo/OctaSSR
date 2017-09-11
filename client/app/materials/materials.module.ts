import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MaterialsRouting } from './materials-routing.module';
import { MaterialsComponent } from './materials.component';



@NgModule({
	imports: [
		CommonModule,
		MaterialsRouting
	],
	declarations: [
		MaterialsComponent
	]
})
export class MaterialsModule { }

