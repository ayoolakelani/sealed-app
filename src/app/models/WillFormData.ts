import { Relationship } from './../shared/enums';
import { RegistrationType, CacRequestStatus, Gender, MARITAL_STATUS, WillRequestStatus } from 'src/app/shared/enums';
import { CompanyInformation, CacCompanyInformation } from './CompanyInformation';
import { Personal } from './Personal';
import { Company } from './Company';

export class WillFormData
{
    requestId : string = '';
     

      personal : WillPersonal = {
        firstName : "",
        lastName : "",
        email : "",
        phone : "",
       gender : undefined,
       Marital_Status : undefined,
       IsHaveChildren : false,
       IsHaveFutureChildren : false,
        userType : RegistrationType.Client,
    };

    beneficaries : WillBeneficiary[] = [];
   
    userId: string;
    status: WillRequestStatus;
    
    clear() {
        this.personal = {
            firstName : "",
            lastName : "",
            email : "",
            phone : "",
            gender : undefined,
            Marital_Status : undefined,
            IsHaveChildren : false,
            IsHaveFutureChildren : false,
            userType : RegistrationType.Client,
        };
        
        this.beneficaries = [];
    }
    

    
}


export class WillPersonal extends Personal
{
   city? : string = '';
   state? : string = '';
   gender : Gender = undefined;
   Marital_Status : MARITAL_STATUS;
   IsHaveChildren? : boolean;
   IsHaveFutureChildren? : boolean;

}

export class WillBeneficiary{
    id: number;
    name : string = "";
    giftType : string = "";
    giftDescription : "";
    relationship : Relationship;
}







