import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from "@angular/common/http";
import {Observable} from "rxjs";
import {Convertor} from "./convertor";
import {map} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})

export class ConvertorService {

  private CONVERTOR_BASE_URL = 'convert';

  constructor(private httpClient: HttpClient) { }

  public get(convertor: Convertor): Observable<any> {
    let params = new HttpParams()
      .set('to', convertor.to)
      .set('from', convertor.from)
      .set('amount', convertor.amount)
    return this.httpClient.get<Convertor>(this.CONVERTOR_BASE_URL, {params: params});
  }
}
