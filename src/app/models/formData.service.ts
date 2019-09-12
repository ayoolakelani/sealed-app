import { WILL_FORM_STEPS } from './../forms/cac-multi-step-form/workflow/workflow.model';
import { WillFormData, WillPersonal, WillBeneficiary } from './WillFormData';


import { Injectable } from '@angular/core';

import { Guid } from 'guid-typescript';
import { CacWorkflowService } from '../forms/cac-multi-step-form/workflow/workflow.service';
import { Personal } from './Personal';
import { CAC_FORM_STEPS } from '../forms/cac-multi-step-form/workflow/workflow.model';
import { Company } from './Company';
import { CacFormData } from './FormData';
import { CompanyInformation } from './CompanyInformation';

@Injectable()
export class CacFormDataService {
    
    private formData: CacFormData = new CacFormData();
    private isPersonalFormValid: boolean = false;
    private isCompanyFormValid: boolean = false;
    private isCompanyInfoFormValid: boolean = false;

    constructor(private workflowService: CacWorkflowService) { 
    }

    getPersonal(): Personal {
 
        return this.formData.personal;
    }

    getRequestId(): string {
        if(!this.formData.requestId)
         this.formData.requestId = Guid.raw();

         return this.formData.requestId ;
    }


    setPersonal(data: Personal) {
        // Update the Personal data only when the Personal Form had been validated successfully
        this.isPersonalFormValid = true;
        this.formData.personal = data;
        // Validate Personal Step in Workflow
        this.workflowService.validateStep(CAC_FORM_STEPS.personal);
    }

    getCompany() : Company {
        // Return the work type
        return this.formData.company;
    }
    
    setCompany(data: Company) {
        // Update the work type only when the Work Form had been validated successfully
        this.isCompanyFormValid = true;
        this.formData.company = data;
        // Validate Work Step in Workflow
        this.workflowService.validateStep(CAC_FORM_STEPS.company);
    }

    getCompanyInformation() : CompanyInformation {
        // Return the Address data
        return this.formData.companyinfo;
    }

    setCompanyInformation(data: CompanyInformation) {
        // Update the Address data only when the Address Form had been validated successfully
        this.isCompanyInfoFormValid = true;
        this.formData.companyinfo = data;
        // Validate Address Step in Workflow
        this.workflowService.validateStep(CAC_FORM_STEPS.companyinfo);
    }

    getFormData(): CacFormData {
        // Return the entire Form Data
        return this.formData;
    }

    resetFormData(): CacFormData {
        // Reset the workflow
        this.workflowService.resetSteps();
        // Return the form data after all this.* members had been reset
        this.formData.clear();
        this.isPersonalFormValid = this.isCompanyFormValid = this.isCompanyInfoFormValid = false;
        return this.formData;
    }

    isFormValid() {
        // Return true if all forms had been validated successfully; otherwise, return false
        return this.isPersonalFormValid &&
               this.isCompanyFormValid  && 
               this.isCompanyInfoFormValid
    }
}



@Injectable()
export class WillFormDataService {
    
    private formData: WillFormData = new WillFormData();
    private isPersonalFormValid: boolean = false;
    private isBeneficiaryValid: boolean = false;
    private isVideoUploaded: boolean = false;

    constructor(private workflowService: CacWorkflowService) { 
    }

    getPersonal(): WillPersonal {
 
        return this.formData.personal;
    }

    getRequestId(): string {
        if(!this.formData.requestId)
         this.formData.requestId = Guid.raw();

         return this.formData.requestId ;
    }


    setPersonal(data: WillPersonal) {
        // Update the Personal data only when the Personal Form had been validated successfully
        this.isPersonalFormValid = true;
        this.formData.personal = data;
        // Validate Personal Step in Workflow
        this.workflowService.validateStep(WILL_FORM_STEPS.personal);
    }

   

    getBeneficiaries() : WillBeneficiary[] {
        // Return the Address data
        return this.formData.beneficaries;
    }

    setBeneficiaries(data: WillBeneficiary[]) {
        // Update the Address data only when the Address Form had been validated successfully
        this.isBeneficiaryValid = true;
        this.formData.beneficaries = data;
        // Validate Address Step in Workflow
        this.workflowService.validateStep(WILL_FORM_STEPS.beneficiaries);
    }

    getFormData(): WillFormData {
        // Return the entire Form Data
        return this.formData;
    }

    resetFormData(): WillFormData {
        // Reset the workflow
        this.workflowService.resetSteps();
        // Return the form data after all this.* members had been reset
        this.formData.clear();
        this.isPersonalFormValid = this.isBeneficiaryValid = this.isVideoUploaded = false;
        return this.formData;
    }

    isFormValid() {
        // Return true if all forms had been validated successfully; otherwise, return false
        return this.isPersonalFormValid &&
               this.isBeneficiaryValid  && 
               this.isVideoUploaded
    }
}