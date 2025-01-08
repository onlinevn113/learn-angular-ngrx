import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class MockDataService {
  private dataUrl = 'assets/mock-data.json';

  constructor(private http: HttpClient) {}

  getMockData(): Observable<any> {
    return this.http.get(this.dataUrl);
  }

  setMockData(newData: any): Observable<any> {
    return new Observable((observer) => {
      console.log('Mock data set successfully:', newData);
      observer.next(newData);
      observer.complete();
    });
  }
}
