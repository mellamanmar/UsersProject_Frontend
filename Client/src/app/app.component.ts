import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {

  public title = 'Client';
	public page_title: string;

	constructor() {
		this.page_title = 'Bienvenido al foro de programación Genius Botsitos';
	}

	ngOnInit(): void {
	}
}
