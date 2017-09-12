import { Directive, Input, ElementRef, Renderer } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser'
import { FormBuilder, ReactiveFormsModule, FormsModule, NgControl } from '@angular/forms';

@Directive({
	selector: '[phone-mask]'
})
export class PhoneMask {
	constructor(private elementRef: ElementRef, renderer: Renderer) {
		renderer.listen(elementRef.nativeElement, 'keydown', (event) => {
			var isNumber = this.testNumber(event);
			if (isNumber) {
				if (!this.isSelected)
					elementRef.nativeElement.value = this.applyMask(elementRef.nativeElement.value);
			}
			else
				event.preventDefault();
		});
		renderer.listen(elementRef.nativeElement, 'blur', (event) => {
			var isNumber = this.testNumber(event);
			if (isNumber) {
				if (!this.isSelected)
					elementRef.nativeElement.value = this.applyMask(elementRef.nativeElement.value);
			}
			else
				event.preventDefault();
		});
	}

	get isSelected() {
		return this.elementRef.nativeElement.selectionStart != this.elementRef.nativeElement.selectionEnd;
	}

	testNumber(event) {
		var key = event ? event.keyCode : event.which;
		var codes: Array<number> = [8, 9, 13, 16, 27, 35, 36, 37, 39, 46, 61, 96, 97, 98, 99, 100, 101, 102, 103, 104, 105];

		if (codes.includes(key))
			return true;

		else if (key < 48 || key > 57)
			return false;

		else return true;
	}

	removeMask(value) {
		var mask = "";
		for (var i = 0; i < value.length; i++) {
			if (value[i] != ' ' && !isNaN(value[i]))
				mask += value[i].toString();
		}
		return mask;
	}

	applyMask(value) {
		var mask = "";
		value = this.removeMask(value);
		if (value.length > 0) {
			if (value.length <= 2)
				mask = '(' + value;
			if (value.length > 2 && value.length <= 6)
				mask = '(' + value.substring(0, 2) + ') ' + value.substring(2, value.length);
			if (value.length > 6 && value.length <= 10)
				mask = '(' + value.substring(0, 2) + ') ' + value.substring(2, 6) + '-' + value.substring(6, value.length);
			if (value.length > 10)
				mask = '(' + value.substring(0, 2) + ') ' + value.substring(2, 7) + '-' + value.substring(7, value.length);
		}
		return mask;
	}
}
