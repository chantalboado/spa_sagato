import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class MessageService {
constructor(private _http: HttpClient) { }
sendMessage(body) {
  const url = `${process.env.API_URL}/formulario`;
  return this._http.post(url, body);
 }
}