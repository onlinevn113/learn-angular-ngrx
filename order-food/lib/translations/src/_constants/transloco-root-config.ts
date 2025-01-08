import { isDevMode } from '@angular/core';

import {
  AVAILABLE_LANGUAGES, DEFAULT_LANGUAGE,
} from './available-languages';

export const TRANSLOCO_ROOT_CONFIG = {
  availableLangs: AVAILABLE_LANGUAGES,
  defaultLang: DEFAULT_LANGUAGE,
  reRenderOnLangChange: true,
  prodMode: !isDevMode(),
};
