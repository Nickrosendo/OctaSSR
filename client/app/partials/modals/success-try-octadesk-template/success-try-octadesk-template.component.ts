import { Component, ViewChild } from '@angular/core';

@Component({
	moduleId: module.id,
	selector: 'success-try-octadesk-template',
	templateUrl: './success-try-octadesk-template.component.html'
})
export class SuccessTryOctadeskTemplateComponent {
	@ViewChild('modalSuccess') template;
}
