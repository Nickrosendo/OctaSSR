import { Component } from '@angular/core';



@Component({
	moduleId: module.id,
	selector: 'octadesk-materials',
	templateUrl: './materials.component.html',
	providers: [ ]
})

export class MaterialsComponent {

	constructor(){
	}


	filtroEbook: boolean = false;
	filtroApresentacao: boolean = false;
	filtroPlanilha: boolean = false;
	filtroWebinar: boolean = false;


	filtra_todos(){
		this.filtroEbook= false;
		this.filtroApresentacao= false;
		this.filtroPlanilha= false;
		this.filtroWebinar= false;
		let button = document.getElementById("filter_text");
		button.innerHTML="Todos";

	}

	filtra_apresentacao(){
		this.filtroApresentacao = false;
		this.filtroEbook = true;
		this.filtroPlanilha = true;
		this.filtroWebinar = true;
		let button = document.getElementById("filter_text");
		button.innerHTML="Apresentações";
	}

	filtra_ebook(){
		this.filtroApresentacao = true;
		this.filtroEbook = false;
		this.filtroPlanilha = true;
		this.filtroWebinar = true;

		let button = document.getElementById("filter_text");

		button.innerHTML="Ebooks";

	}

	filtra_planilha(){
		this.filtroApresentacao = true;
		this.filtroEbook = true;
		this.filtroPlanilha = false;
		this.filtroWebinar = true;

		let button = document.getElementById("filter_text");

		button.innerHTML="Planilhas";
	}

	filtra_webinar(){
		this.filtroApresentacao = true;
		this.filtroEbook = true;
		this.filtroPlanilha = true;
		this.filtroWebinar = false;

		let button = document.getElementById("filter_text");

		button.innerHTML="Webinar";
	}



}
