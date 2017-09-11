import { Component, OnInit, ViewChild, HostListener } from '@angular/core';

@Component({
	moduleId: module.id,
	selector: 'octadesk-features',
	templateUrl: './features.component.html'
})
export class FeaturesComponent implements OnInit {
	freeze: boolean = false;
	anchor: string;
	anchors: any = { 5711: 'apps-e-apis', 4683: 'gestao', 3868: 'clientes-e-agentes', 2867: 'automacoes', 2044: 'personalizacao', 947: 'chamado', 59: 'multicanal' };

	ngOnInit() {
		for (let key in this.anchors) {
			if (window.location.hash == '#' + this.anchors[key]) {
				setTimeout(function () {
					window.scrollTo(0, parseInt(key));
				}, 0);
			}
		}
	}


	goTo(location: string): void {
		window.location.hash = location;
	}
	@HostListener('window:scroll') onWindowScroll(event) {
		for (let key in this.anchors) {
			if (parseInt(key) < window.scrollY + 86) {
				this.anchor = this.anchors[key];
			}
		}
		if (window.scrollY >= 86)
			this.freeze = true;
		else
			this.freeze = false;
	}
}
