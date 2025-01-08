import { EnvironmentProviders } from '@angular/core';
import { provideTransloco } from '@jsverse/transloco';

import { TRANSLOCO_ROOT_CONFIG } from '../_constants/transloco-root-config';
import { TranslocoHttpLoader } from '../transloco-loader/transloco-loader';

export function provideRootTransloco(): EnvironmentProviders[] {
  return provideTransloco({
    config: TRANSLOCO_ROOT_CONFIG,
    loader: TranslocoHttpLoader,
  });
}
