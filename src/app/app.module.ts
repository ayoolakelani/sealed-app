import { CacService } from './services/cac/cac.service';
import { AngularFireDatabase, AngularFireDatabaseModule } from '@angular/fire/database';
import { AngularFireStorage, AngularFireStorageModule } from 'angularfire2/storage';
import { CacMultiStepFormModule } from './forms/cac-multi-step-form/cac-multi-step-form.module';

import { CacMultiStepFormComponent } from './forms/cac-multi-step-form/cac-multi-step-form.component';

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ToastrModule } from 'ngx-toastr';

import { AppRoutingModule } from './app.routing';
import { NavigationModule } from './navigation/navigation.module';
import {AngularFireModule} from 'angularfire2';
import {AngularFirestoreModule } from 'angularfire2/firestore';
import {AngularFireAuthModule} from 'angularfire2/auth';

import { AppComponent } from './app.component';

import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { ChartsModule } from 'ng2-charts';
import { environment } from 'src/environments/environment';
import { AuthGuard } from './auth-guard.service';
import { AuthService } from './services/auth/auth.service';
import { UserService } from './services/user/user.service';
import { AdminAuthGuard } from './admin-auth-guard.service';
import { LoginComponent } from './login/login.component';
import { CacComponent } from './cac/cac.component';

import { CacFormDataService } from './models/formData.service';
import { CacWorkflowService } from './forms/cac-multi-step-form/workflow/workflow.service';
import { CacWorkflowGuard } from './forms/cac-multi-step-form/workflow/workflow-guard.service';
import { CacNavigationModule } from './forms/cac-multi-step-form/cac-navigation.module';
import { UploadFileService } from './services/fileupload/upload-file.service';
import { RegisterComponent } from './register/register.component';
import { AdminCacComponent } from './admin/admin-cac/admin-cac.component';
import { WillComponent } from './will/will.component';
import { WillMultiStepFormComponent } from './forms/will-multi-step-form/will-multi-step-form.component';
import { WillBeneficiariesComponent } from './forms/will-multi-step-form/will-beneficiaries/will-beneficiaries.component';
import { VideoUploadComponent } from './forms/will-multi-step-form/video-upload/video-upload.component';
import { WillPreviewComponent } from './forms/will-multi-step-form/will-preview/will-preview.component';

@NgModule({
  imports: [
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule.enablePersistence(), 
    AngularFireAuthModule,
    AngularFireStorageModule,
    AngularFireDatabaseModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    NavigationModule,
    RouterModule,
    AppRoutingModule,
    NgbModule,
    ChartsModule,
    ToastrModule.forRoot(),
  
  ],
  declarations: [
    
       AppComponent,
       LoginComponent, 
       AdminLayoutComponent, RegisterComponent, AdminCacComponent, 
  
    

  ],

  providers: [

    AuthGuard,
    AuthService,
    UserService,
    AdminAuthGuard,
    CacWorkflowGuard,    
    { provide: CacFormDataService, useClass: CacFormDataService },
    { provide: CacWorkflowService, useClass: CacWorkflowService },
    { provide: UploadFileService, useClass: UploadFileService },
    { provide: CacService, useClass: CacService }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }