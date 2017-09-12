import { Component, Input, ViewChild, ViewChildren} from '@angular/core';

import { ModalDirective } from '../../modals/modal.directive';
import { SuccessTryOctadeskTemplateComponent } from '../../modals/success-try-octadesk-template/success-try-octadesk-template.component';

@Component({
    moduleId: module.id,
    selector: 'try-octadesk-modal',
    templateUrl: './try-octadesk-modal.component.html',
	providers: [ ModalDirective ]
})
export class TryOctadeskModalComponent {

	success: boolean;
	@Input('email') Email: string;
	@ViewChild(ModalDirective) private modal;
	@ViewChild(SuccessTryOctadeskTemplateComponent) private templateSuccess;
	@ViewChild('tryOctadeskModal') private template;

	constructor() { }


	public open() {
		return this.modal.open(this.template);
	}

	public close() {
		this.success = false;
		this.modal.close();
	}

	onSubmitted(submmited: boolean) {
		if (submmited) {
			this.success = true;
		}
	}
}
