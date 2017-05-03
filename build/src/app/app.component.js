import { Component } from '@angular/core';
import { LocalDBService } from './localdb.service';
export class AppComponent {
    /**
     * @param {?} localdb
     */
    constructor(localdb) {
        this.localdb = localdb;
    }
    /**
     * @return {?}
     */
    init() {
        this.localdb.init();
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.init();
    }
}
AppComponent.decorators = [
    { type: Component, args: [{
                selector: 'app-root',
                templateUrl: './app.component.html'
            },] },
];
/**
 * @nocollapse
 */
AppComponent.ctorParameters = () => [
    { type: LocalDBService, },
];
function AppComponent_tsickle_Closure_declarations() {
    /** @type {?} */
    AppComponent.decorators;
    /**
     * @nocollapse
     * @type {?}
     */
    AppComponent.ctorParameters;
    /** @type {?} */
    AppComponent.prototype.localdb;
}
