import { NgModule } from '@angular/core';

import { SuccessStoriesRouting } from './success-stories-routing.module'
import { SuccessStoriesComponent } from './success-stories.component';


@NgModule({
	imports: [
		SuccessStoriesRouting
	],
	declarations: [
		SuccessStoriesComponent
	]
})
export class SuccessStoriesModule { }
