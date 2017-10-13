// Angular Modules
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

// App Components
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { AddCertificateComponent } from './add-certificate/add-certificate.component';
import { ViewCertificateComponent } from './view-certificate/view-certificate.component';
import { SearchByNameComponent } from './search-by-name/search-by-name.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { certficateMockData } from './search-by-name/search-by-name.service';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    AboutComponent,
    AddCertificateComponent,
    ViewCertificateComponent,
    SearchByNameComponent,
    WelcomeComponent
  ],

  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot([
      {
        path: 'app-login',
        component: LoginComponent
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
        component: SearchByNameComponent
      },
      {
        path: 'app-home',
        component: HomeComponent
      },
    ])
  ],
  providers: [
    certficateMockData,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
