import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { FeaturesComponent } from './features.component';

const dataRoute = {
  metadata: {
    title: 'Atendimento ao cliente e sistema de Help Desk - Conheça as funcionalidade do Octadesk',
    description: 'Sistema de Atendimento ao Cliente e Help Desk ideal para sua empresa. Veja como nosso sistema de chamados pode te ajudar - Avalie grátis por 15 dias',
    keywords: 'Atendimento ao cliente'
  }
};

const featuresRoutes: Routes = [
  {
    path: 'funcionalidades/atendimento-ao-cliente',
    component: FeaturesComponent,
    data: dataRoute
  },
  {
    path: 'product',
    component: FeaturesComponent,
    data: dataRoute
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(featuresRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class FeaturesRouting { }
