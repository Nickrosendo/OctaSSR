import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MaterialsComponent} from './materials.component';

const dataRoute = {
	metadata: {
		title: 'Pagina de Materiais',
		description: 'Materiais',
		keywords: 'Materiais'
	}
};

const materialsRouting: Routes = [{
	path: 'materiais-para-helpdesk',
	component: MaterialsComponent,
	data: dataRoute
}];

@NgModule({
	imports: [
		RouterModule.forChild(materialsRouting)
	],
	exports: [
		RouterModule
	]
})
export class MaterialsRouting { }
