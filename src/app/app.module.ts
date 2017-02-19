import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { LookupComponent } from './lookup/lookup.component';
import { LocalDBService } from './localdb.service';

const appRoutes: Routes = [

  { path: 'welcome', component: WelcomeComponent },
  { path: 'lookup', component: LookupComponent },
  {
    path: '',
    redirectTo: '/welcome',
    pathMatch: 'full'
  }, {
    path: '**',
    redirectTo: '/welcome',

  }

];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    WelcomeComponent,
    LookupComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes, { useHash: true })
  ],
  providers: [LocalDBService],
  bootstrap: [AppComponent]
})
export class AppModule { }
