import { Component } from '@angular/core';
import { LocalDBService } from '../localdb.service';
import { BldgtransportService } from '../bldgtransport.service';
import { Router } from '@angular/router';
export class LookupComponent {
    /**
     * @param {?} router
     * @param {?} localdb
     * @param {?} trans
     */
    constructor(router, localdb, trans) {
        //    this.err = "test error";
        this.router = router;
        this.localdb = localdb;
        this.trans = trans;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
    }
    /**
     * @return {?}
     */
    sub() {
        //    this.err = this.bldg;
        console.log(this.bldg);
        this.localdb.get(this.bldg).then((doc) => {
            this.err = "";
            console.log(doc);
            this.doc = doc;
            this.trans.passDoc(this.doc);
            this.router.navigateByUrl('/bldgresult');
        }).catch((err) => {
            if (err.status === 404) {
                this.err = "Building is not found!";
            }
            else {
                this.err = err.name + ": " + err.message;
            }
            console.log(err);
        });
    }
}
LookupComponent.decorators = [
    { type: Component, args: [{
                templateUrl: './lookup.component.html'
            },] },
];
/**
 * @nocollapse
 */
LookupComponent.ctorParameters = () => [
    { type: Router, },
    { type: LocalDBService, },
    { type: BldgtransportService, },
];
function LookupComponent_tsickle_Closure_declarations() {
    /** @type {?} */
    LookupComponent.decorators;
    /**
     * @nocollapse
     * @type {?}
     */
    LookupComponent.ctorParameters;
    /** @type {?} */
    LookupComponent.prototype.err;
    /** @type {?} */
    LookupComponent.prototype.bldg;
    /** @type {?} */
    LookupComponent.prototype.doc;
    /** @type {?} */
    LookupComponent.prototype.router;
    /** @type {?} */
    LookupComponent.prototype.localdb;
    /** @type {?} */
    LookupComponent.prototype.trans;
}
