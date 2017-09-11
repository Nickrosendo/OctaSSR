import { NgModule } from '@angular/core';

import { PricingRouting } from './pricing-routing.module';
import { PricingComponent } from './pricing.component';


@NgModule({
	imports: [
		PricingRouting
	],
	declarations: [
		PricingComponent
	]
})
export class PricingModule { }
