// app/translate/translation.ts

import { OpaqueToken } from '@angular/core';

// import translations
import { LANG_EN_NAME, LANG_EN_TRANS } from './lang-en';
import { LANG_NL_NAME, LANG_NL_TRANS } from './lang-nl';
import { LANG_FR_NAME, LANG_FR_TRANS } from './lang-fr';

// translation token
export const TRANSLATIONS = new OpaqueToken('translations');

// all traslations
export const dictionary = { };
dictionary[LANG_EN_NAME] = LANG_EN_TRANS;
dictionary[LANG_NL_NAME] = LANG_NL_TRANS;
dictionary[LANG_FR_NAME] = LANG_FR_TRANS;

// providers
export const TRANSLATION_PROVIDERS = [
	{ provide: TRANSLATIONS, useValue: dictionary },
];
