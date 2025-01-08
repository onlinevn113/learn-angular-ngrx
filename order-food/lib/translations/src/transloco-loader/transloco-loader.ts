import {
  inject, Injectable,
} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {
  Translation, TranslocoLoader,
} from '@jsverse/transloco';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class TranslocoHttpLoader implements TranslocoLoader {
  readonly #httpClient = inject(HttpClient);

  getTranslation(lang: string): Observable<Translation> {
    return this.#httpClient.get<Translation>(`assets/i18n/${lang}.json`);
  }
}
