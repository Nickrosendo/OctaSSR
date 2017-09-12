import { Directive, ElementRef, HostListener, Input } from '@angular/core';

import { NgbModal, NgbModalRef, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';

@Directive({
	selector: 'octadesk-modal'
})
export class ModalDirective {

	@Input('custom-class') CustomClass: string;



	closeResult: string;
	private modalInstance: NgbModalRef;
	constructor(private modalService: NgbModal) { }

	open(content) {
		this.modalInstance = this.modalService.open(content, { windowClass: this.CustomClass });

		this.modalInstance.result.then((result) => {
			this.closeResult = `Closed with: ${result}`;
		}, (reason) => {
			this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
		});
	}

	close() {
		if (this.modalInstance != null)
			this.modalInstance.close();
	}

	private getDismissReason(reason: any): string {
		if (reason === ModalDismissReasons.ESC) {
			return 'by pressing ESC';
		} else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
			return 'by clicking on a backdrop';
		} else {
			return `with: ${reason}`;
		}
	}
}
