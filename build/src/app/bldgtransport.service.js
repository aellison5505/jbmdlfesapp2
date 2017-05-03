import { Injectable } from '@angular/core';
export class BldgtransportService {
    constructor() {
        this.doc = {};
    }
    /**
     * @param {?} pass
     * @return {?}
     */
    passDoc(pass) {
        this.doc = pass;
        console.log("emit" + JSON.stringify(this.doc));
    }
}
BldgtransportService.decorators = [
    { type: Injectable },
];
/**
 * @nocollapse
 */
BldgtransportService.ctorParameters = () => [];
function BldgtransportService_tsickle_Closure_declarations() {
    /** @type {?} */
    BldgtransportService.decorators;
    /**
     * @nocollapse
     * @type {?}
     */
    BldgtransportService.ctorParameters;
    /** @type {?} */
    BldgtransportService.prototype.doc;
}
