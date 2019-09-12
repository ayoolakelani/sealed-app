import { WillAppRoutes } from './will-multi-step-form-routing';
import { WillPersonalComponent } from './personal/will-personal.component';
import { WillPreviewComponent } from './will-preview/will-preview.component';
import { WillBeneficiariesComponent } from './will-beneficiaries/will-beneficiaries.component';
import { VideoUploadComponent } from './video-upload/video-upload.component';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(WillAppRoutes),
        NgbModule,
        FormsModule,
    ],
    declarations: [WillPersonalComponent, VideoUploadComponent, WillBeneficiariesComponent, WillPreviewComponent],
})
export class WillMultiStepFormModule {
}
