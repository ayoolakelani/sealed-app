import { WillFormDataService } from './../../../models/formData.service';
import { Component, OnInit }   from '@angular/core';
import { Router }              from '@angular/router';

import { RegistrationType, Gender, MARITAL_STATUS } from 'src/app/shared/enums';
import { WillPersonal } from 'src/app/models/WillFormData';

@Component ({
    selector:     'mt-wizard-will-personal'
    ,templateUrl: './will-personal.component.html'
})

export class WillPersonalComponent implements OnInit {
    title = 'Please tell us about yourself.';
    personal: WillPersonal;
    form: any;
    public categories  =  Object.values(RegistrationType);
    public maritalstatuses  =  Object.values(MARITAL_STATUS);
    public genders  =  Object.values(Gender);
   
    
    constructor(private router: Router, private formDataService: WillFormDataService) {
    }

    ngOnInit() {
        this.personal = this.formDataService.getPersonal();
        console.log('Personal feature loaded!');
    }

    save(form: any): boolean {
        if (!form.valid) {
            return false;
        }
            
        this.formDataService.setPersonal(this.personal);
        return true;
    }

    goToNext(form: any) {
        if (this.save(form)) {
            // Navigate to the work page
            this.router.navigate(['/will/beneficiaries']);
        }
    }

    
}


