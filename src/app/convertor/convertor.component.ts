import { Component, OnInit } from '@angular/core';
import {CurrencyService} from "../sahred/currency.service";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Convertor} from "../sahred/convertor";
import {ConvertorService} from "../sahred/convertor.service";

@Component({
  selector: 'app-convertor',
  templateUrl: './convertor.component.html',
  styleUrls: ['./convertor.component.css']
})
export class ConvertorComponent implements OnInit {

  form!: FormGroup;
  currencies!: string[];

  constructor(private currencyService: CurrencyService, private fb: FormBuilder, private convertorService: ConvertorService) { }

  ngOnInit(): void {
    this.initForm();
    this.currencyService.getCurrency().subscribe(value => this.currencies = value);
    console.log()
  }

  private initForm(): void {
    this.form = this.fb.group({
      from: ['', [Validators.required]],
      to: ['', [Validators.required]],
      amount: ['', [Validators.required]],
    });
  }

  getRates(): void{
    const convertor: Convertor = {
      from: this.form.get('from')?.value,
      to: this.form.get('to')?.value,
      amount: this.form.get('amount')?.value
    };
    this.convertorService.get(convertor).subscribe(value => window.location.assign('home'));
    this.initForm();
    console.log(convertor);
  }

}
