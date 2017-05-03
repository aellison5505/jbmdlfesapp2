import { platformBrowser } from '@angular/platform-browser';
import { AppModuleNgFactory } from '../aot/src/app/app.module.ngfactory';
import { enableProdMode } from '@angular/core';
enableProdMode();
console.log('Running AOT compiled');
let /** @type {?} */ bootstrap = () => {
    platformBrowser().bootstrapModuleFactory(AppModuleNgFactory);
};
//if cordova wait for framework to load then call bootstrap to load angular
if (!!window['cordova']) {
    console.log("cordova");
    document.addEventListener('deviceready', bootstrap);
}
else {
    bootstrap();
}
