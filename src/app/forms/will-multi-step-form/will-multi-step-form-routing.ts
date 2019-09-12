import { WillBeneficiariesComponent } from './will-beneficiaries/will-beneficiaries.component';
import { Routes } from '@angular/router';
import { WillPersonalComponent } from './personal/will-personal.component';
import { WillWorkflowGuard } from './workflow/will-workflow-guard.service';
import { VideoUploadComponent } from './video-upload/video-upload.component';
import { WillPreviewComponent } from './will-preview/will-preview.component';










export const WillAppRoutes: Routes = [
    // 1st Route
    { path: 'personal',  component: WillPersonalComponent },
    // 2nd Route
    { path: 'beneficiaries',  component: WillBeneficiariesComponent, canActivate: [WillWorkflowGuard] },
    // 3rd Route
    { path: 'videoupload',  component: VideoUploadComponent, canActivate: [WillWorkflowGuard] },
    // 4th Route
    { path: 'result',  component: WillPreviewComponent, canActivate: [WillWorkflowGuard] },
    // // 5th Route
    { path: '',   redirectTo: 'personal', pathMatch: 'full' },
    // // 6th Route
    { path: '**', component: WillPersonalComponent }
];