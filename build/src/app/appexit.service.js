import { Injectable } from '@angular/core';
export class AppExitService {
    constructor() {
        this.navigator = window.navigator;
    }
    /**
     * @return {?}
     */
    exitApp() {
        let /** @type {?} */ r = confirm('Are you sure you want to exit?');
        if (r === true) {
            if (this.navigator.app) {
                this.navigator.app.exitApp();
            }
            else if (this.navigator.device) {
                this.navigator.device.exitApp();
            }
            else {
                window.close();
                // window.location.href = "http://new";
            }
        }
    }
}
AppExitService.decorators = [
    { type: Injectable },
];
/**
 * @nocollapse
 */
AppExitService.ctorParameters = () => [];
function AppExitService_tsickle_Closure_declarations() {
    /** @type {?} */
    AppExitService.decorators;
    /**
     * @nocollapse
     * @type {?}
     */
    AppExitService.ctorParameters;
    /** @type {?} */
    AppExitService.prototype.navigator;
}
