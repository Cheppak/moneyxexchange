import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class ExchangeService {
  baseUrl: String = 'http://localhost:8080';
  dolares: any;
  euros: number;

  constructor(private httpClient: HttpClient) { }
  get_rate() {
    this.httpClient.get(this.baseUrl + '/cotizacion?value=' + this.euros).subscribe((res) => {
      this.dolares = res;
  });
  }

}
