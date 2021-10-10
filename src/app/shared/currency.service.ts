import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class CurrencyService {

  private CURRENCIES_BASE_URL = 'currency';

  constructor(private httpClient: HttpClient) { }

  public getCurrency(): Observable <string[]> {
    return this.httpClient.get<string[]>(this.CURRENCIES_BASE_URL);
  }
}
