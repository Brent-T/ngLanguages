import {Injectable, Inject} from '@angular/core';
import { TRANSLATIONS } from './translations'; // import our opaque token

@Injectable()
export class TranslateService {
	private _currentLang: string;

	public getCurrentLang() {
	  return this._currentLang;
	}

	// inject dictionairy
	constructor(@Inject(TRANSLATIONS) private _translations: any) {
	}

	public use(lang: string): void {
		// set current language
		this._currentLang = lang;
	}

	private translate(key: string): string {
		// private perform translation
		let translation = key;

		if (this._translations[this._currentLang] && this._translations[this._currentLang][key]) {
			return this._translations[this._currentLang][key];
		}

		return translation;
	}

	public instant(key: string) {
		// public perform translation
		return this.translate(key);
	}
}
