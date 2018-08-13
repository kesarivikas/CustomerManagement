import { Injectable } from '@angular/core';

@Injectable()
export class NavService {
	visible: boolean = false;
  constructor() { }

	show() {
		this.visible = true;
	}

	hide() {
		this.visible = false;
	}
}
