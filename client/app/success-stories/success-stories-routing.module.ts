import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SuccessStoriesComponent } from './success-stories.component';

const dataRoute = {
	metadata: {
		title: 'Sistema de Atendimento Octadesk - Conheça os nossos casos de sucesso',
		description: 'Veja os casos de sucesso do nosso Sistema de Atendimento Online. Entenda como nosso Software de Help Desk pode te ajudar - Avalie grátis por 15 dias ',
		keywords: 'Sistema de atendimento'
	}
};

const successStoriesRoutes: Routes = [
	{
		path: 'casos-de-sucesso/sistema-de-atendimento',
		component: SuccessStoriesComponent,
		data: dataRoute
	}
];

@NgModule({
	imports: [
		RouterModule.forChild(successStoriesRoutes)
	],
	exports: [
		RouterModule
	]
})
export class SuccessStoriesRouting { }
