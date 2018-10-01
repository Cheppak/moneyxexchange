import { Component, OnInit } from '@angular/core';
import { ExchangeService } from '../exchange.service';

@Component({
  selector: 'app-exchange',
  templateUrl: './exchange.component.html',
  styleUrls: ['./exchange.component.css'],
  providers: [ ExchangeService ]
})
export class ExchangeComponent implements OnInit {

  euros: number;
  dolares: any;

  constructor(private service: ExchangeService ) {
  }

  ngOnInit() {
  }

  onClickMe() {
    this.dolares = this.service.getRate(this.euros);
  }
}
