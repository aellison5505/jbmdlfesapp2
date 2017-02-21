import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';
import { environment } from './environments/environment';
import { AppModule } from './app/app.module';

if (environment.production) {
  enableProdMode();
}

//call for bootstrap

let bootstrap = () => {
  platformBrowserDynamic().bootstrapModule(AppModule);
};

//if cordova wait for framework to load then call bootstrap to load angular
if (!!window['cordova']) {
  console.log("cordova");
  document.addEventListener('deviceready', bootstrap);
} else {
  bootstrap();
}
