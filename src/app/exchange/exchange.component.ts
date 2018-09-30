import { Component, OnInit } from '@angular/core';
import { ExchangeService } from '../exchange.service';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-exchange',
  templateUrl: './exchange.component.html',
  styleUrls: ['./exchange.component.css']
})
export class ExchangeComponent implements OnInit {

  form: FormGroup;
  
  constructor(private service: ExchangeService, private fb: FormBuilder ) {
    this.form = this.fb.group({
      euros: ['', Validators.pattern('^[0-9]')]
    });
  }

  ngOnInit() {
    this.form = new FormGroup({
      euros: new FormControl('', Validators.required)
    });
  }

  get_rate() {
    this.service.get_rate();
  }

}
