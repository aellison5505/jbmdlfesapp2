import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';
import { environment } from './environments/environment';
import { AppModule } from './app/app.module';
if (environment.production) {
    enableProdMode();
}
var bootstrap = function () {
    platformBrowserDynamic().bootstrapModule(AppModule);
};
if (!!window['cordova']) {
    console.log("cordova");
    document.addEventListener('deviceready', bootstrap);
}
else {
    bootstrap();
}
//# sourceMappingURL=../../src/main.js.map