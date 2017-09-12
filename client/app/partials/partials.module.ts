import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AvalieGratisEmailFormFieldComponent } from './avalie-gratis-email-field-form/avalie-gratis-email-field-form.component';
import { ModalDirective } from './modals/modal.directive';
import { EvaluationFormComponent } from './evaluation-form/evaluation-form.component';
import { TryOctadeskModalComponent } from './modals/try-octadesk-modal/try-octadesk-modal.component';
import { SuccessTryOctadeskTemplateComponent } from './modals/success-try-octadesk-template/success-try-octadesk-template.component';
import { PhoneMask } from './evaluation-form/phone-mask.directive';



@NgModule({
	imports: [
    BrowserModule,
    NgbModule,
		FormsModule,
		ReactiveFormsModule,
    RouterModule
	],
	declarations: [
    AvalieGratisEmailFormFieldComponent,
    ModalDirective,
    EvaluationFormComponent,
    TryOctadeskModalComponent,
    SuccessTryOctadeskTemplateComponent,
    PhoneMask
	],
	exports: [
    AvalieGratisEmailFormFieldComponent,
    ModalDirective,
    EvaluationFormComponent,
    TryOctadeskModalComponent,
    SuccessTryOctadeskTemplateComponent,
    PhoneMask
	]
})
export class PartialsModule { }
