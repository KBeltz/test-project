import { Component, OnInit } from '@angular/core';
import { ControlContainer, FormGroupDirective } from '@angular/forms';

@Component({
  selector: 'app-address-form',
  templateUrl: './address-form.component.html',
  styleUrls: ['./address-form.component.sass'],
  viewProviders: [ { provide: ControlContainer, useExisting: FormGroupDirective } ]
})
export class AddressFormComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
