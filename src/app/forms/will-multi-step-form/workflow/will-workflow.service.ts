import { Injectable }         from '@angular/core';
import { WILL_FORM_STEPS, CAC_FORM_STEPS } from '../../cac-multi-step-form/workflow/workflow.model';



@Injectable()
export class WillWorkflowService {

    
    private workflow = [
        { step: WILL_FORM_STEPS.personal, valid: false },
        { step: WILL_FORM_STEPS.beneficiaries, valid: false },
        { step: WILL_FORM_STEPS.videoupload, valid: false },
        { step: CAC_FORM_STEPS.result, valid: false }
    ];
    
    validateStep(step: string) {
        // If the state is found, set the valid field to true 
        var found = false;
        for (var i = 0; i < this.workflow.length && !found; i++) {
            if (this.workflow[i].step === step) {
                found = this.workflow[i].valid = true;
            }
        }
    }

    resetSteps() {
        // Reset all the steps in the Workflow to be invalid
        this.workflow.forEach(element => {
            element.valid = false;
        });
    }

    getFirstInvalidStep(step: string) : string {
        // If all the previous steps are validated, return blank
        // Otherwise, return the first invalid step
        var found = false;
        var valid = true;
        var redirectToStep = '';
        for (var i = 0; i < this.workflow.length && !found && valid; i++) {
            let item = this.workflow[i];
            if (item.step === step) {
                found = true;
                redirectToStep = '';
            }
            else {
                valid = item.valid;
                redirectToStep = item.step
            }
        }
        return redirectToStep;
    }
}