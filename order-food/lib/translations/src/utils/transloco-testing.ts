import { ModuleWithProviders } from '@angular/core';
import {
  TranslocoTestingModule, TranslocoTestingOptions,
} from '@jsverse/transloco';

import { AVAILABLE_LANGUAGES } from '../_constants/available-languages';

export function getTranslocoTestingModule(options: TranslocoTestingOptions = {}): ModuleWithProviders<TranslocoTestingModule> {
  const langs = {
    de: {},
    en: {},
  };

  return TranslocoTestingModule.forRoot({
    langs,
    translocoConfig: {
      availableLangs: AVAILABLE_LANGUAGES,
      defaultLang: 'en',
    },
    preloadLangs: true,
    ...options,
  });
}
