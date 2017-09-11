import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ContactComponent } from './contact.component';

const dataRoute = {
  metadata: {
    title: 'Octadesk - Converse com nossos especialista em Atendimento e Helpdesk',
    description: 'Entre em contato com nossos consultores de Atendimento ao Cliente e Helpdesk. Tire suas dúvidas e descubra como podemos ajudar sua empresa.'
  }
};

const contactRoutes: Routes = [
  {
    path: 'contato',
    component: ContactComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(contactRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class ContactRouting { }
