import { Component } from '@angular/core';
import { BldgtransportService } from '../bldgtransport.service';
export class BldgResultComponent {
    /**
     * @param {?} bldg
     */
    constructor(bldg) {
        this.bldg = bldg;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.msg = this.bldg.doc;
    }
}
BldgResultComponent.decorators = [
    { type: Component, args: [{
                templateUrl: './bldgresult.component.html'
            },] },
];
/**
 * @nocollapse
 */
BldgResultComponent.ctorParameters = () => [
    { type: BldgtransportService, },
];
function BldgResultComponent_tsickle_Closure_declarations() {
    /** @type {?} */
    BldgResultComponent.decorators;
    /**
     * @nocollapse
     * @type {?}
     */
    BldgResultComponent.ctorParameters;
    /** @type {?} */
    BldgResultComponent.prototype.msg;
    /** @type {?} */
    BldgResultComponent.prototype.bldg;
}
