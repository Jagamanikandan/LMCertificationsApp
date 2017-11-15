// Angular Modules
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

// App Components
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { AddCertificateComponent } from './add-certificate/add-certificate.component';
import { ViewCertificateComponent } from './view-certificate/view-certificate.component';
import { SearchCertificationComponent } from './search-certification/search-certification.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { certficatesService, certificate } from './search-certification/search-certification.service';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    HomeComponent,
    AboutComponent,
    AddCertificateComponent,
    ViewCertificateComponent,
    SearchCertificationComponent,
    WelcomeComponent
  ],

  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot([
      {
        path: 'login',
        component: LoginComponent
      },
      {
        path: 'signup',
        component: SignupComponent
      },
      {
        path: 'welcome',
        component: WelcomeComponent
      },
      {
        path: 'addCertificate',
        component: AddCertificateComponent
      },
      {
        path: 'searchByName',
        component: SearchCertificationComponent
      },
      {
        path: 'home',
        component: HomeComponent,
        children: [
          { path: 'welcome', redirectTo: 'welcome', pathMatch: 'full' },
        ]
      },
    ])
  ],
  providers: [
    certficatesService,
    certificate
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }