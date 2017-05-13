import { Component } from '@angular/core';

import { TranslateService } from './../../translate';

@Component({
	selector: 'header',
	templateUrl: './header.component.html',
	styleUrls: ['./header.component.css']
})

export class Header {
	public supportedLanguages: any[];

    constructor(private _translate: TranslateService) { }

    ngOnInit() {
        // standing data
        this.supportedLanguages = [
	        { display: 'English', value: 'en' },
	        { display: 'Nederlands', value: 'nl'},
	        { display: 'Français', value: 'fr' },
        ];

        // set current langage
        this.selectLang('fr');
    }

    selectLang(lang: string) {
        // set current lang;
        this._translate.use(lang);
    }
}
