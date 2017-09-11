import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FeaturesRouting } from './features-routing.module'
import { FeaturesComponent } from './features.component';

@NgModule({
	imports: [
    CommonModule,
		FeaturesRouting
	],
	declarations: [
		FeaturesComponent
	]
})
export class FeaturesModule { }
