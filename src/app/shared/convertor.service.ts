import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Convertor} from "./convertor";

@Injectable({
  providedIn: 'root'
})
export class ConvertorService {

  private CONVERTOR_BASE_URL = 'convert';

  constructor(private httpClient: HttpClient) { }

  public get(convertor: Convertor): Observable<Convertor> {
    return this.httpClient.get<Convertor>(this.CONVERTOR_BASE_URL + '/' + convertor);
  }
}
