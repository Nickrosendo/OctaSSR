import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home.component';

const homeRoutes: Routes = [
	{
		path: '',
		component: HomeComponent,
		data: {
			metadata: {
				title: 'Help Desk e sistema de atendimento ao cliente Octadesk',
				description: 'Sistema de Help Desk e Atendimento ao cliente. Conheça nosso sistema de chamados na nuvem para prestar suporte ao cliente - Avalie grátis por 15 dias',
				keywords: 'Help Desk'
			}
		}
	}
];

@NgModule({
	imports: [
		RouterModule.forChild(homeRoutes)
	],
	exports: [
		RouterModule
	]
})
export class HomeRouting { }
