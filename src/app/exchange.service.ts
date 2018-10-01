import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class ExchangeService {
  baseUrl: String = 'http://localhost:8080';
  euros: number;
  dolares: any;

  constructor(private httpClient: HttpClient) { }

  getRate(euros: number) {
    this.httpClient.get(this.baseUrl + '/cotizacion?value=' + euros).subscribe(data => this.dolares = data['rate'],
     (err) => new Error(err));
    return this.dolares;
  }

}
