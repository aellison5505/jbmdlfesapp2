import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { LookupComponent } from './lookup/lookup.component';
import { LocalDBService } from './localdb.service';
import { BldgResultComponent } from './bldgresult/bldgresult.component';
import { BldgtransportService } from './bldgtransport.service';
const /** @type {?} */ appRoutes = [
    { path: 'welcome', component: WelcomeComponent },
    { path: 'lookup', component: LookupComponent },
    { path: 'bldgresult', component: BldgResultComponent },
    {
        path: '',
        redirectTo: '/welcome',
        pathMatch: 'full'
    }, {
        path: '**',
        redirectTo: '/welcome',
    }
];
export class AppModule {
}
AppModule.decorators = [
    { type: NgModule, args: [{
                declarations: [
                    AppComponent,
                    HeaderComponent,
                    WelcomeComponent,
                    LookupComponent,
                    BldgResultComponent
                ],
                imports: [
                    BrowserModule,
                    FormsModule,
                    HttpModule,
                    RouterModule.forRoot(appRoutes, { useHash: true })
                ],
                providers: [LocalDBService, BldgtransportService],
                bootstrap: [AppComponent]
            },] },
];
/**
 * @nocollapse
 */
AppModule.ctorParameters = () => [];
function AppModule_tsickle_Closure_declarations() {
    /** @type {?} */
    AppModule.decorators;
    /**
     * @nocollapse
     * @type {?}
     */
    AppModule.ctorParameters;
}
