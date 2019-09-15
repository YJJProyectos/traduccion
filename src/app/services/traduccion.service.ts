import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class TraduccionService {

  constructor(
    public http: HttpClient
  ) { }

  busquedaCaracteres(aBuscar: string): Observable<any> {
    let url = `https://www.google.com/inputtools/request?ime=pinyin&ie=utf-8&oe=utf-8&app=translate&num=10&text=${ aBuscar }`;

    return this.http.get(url);
  }
}
