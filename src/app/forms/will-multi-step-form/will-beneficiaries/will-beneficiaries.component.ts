import { WillBeneficiary } from './../../../models/WillFormData';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-will-beneficiaries',
  templateUrl: './will-beneficiaries.component.html',
  styleUrls: ['./will-beneficiaries.component.scss']
})
export class WillBeneficiariesComponent implements OnInit {


  title = 'Business Owner Information';
  public beneficiaries: WillBeneficiary[];


  constructor() { }

  ngOnInit() {
  }

}
