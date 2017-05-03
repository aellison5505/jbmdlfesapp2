import { Component } from '@angular/core';
export class HeaderComponent {
    constructor() {
        this.vis = true;
    }
    /**
     * @return {?}
     */
    show() {
        this.vis = false;
    }
    /**
     * @return {?}
     */
    hide() {
        this.vis = true;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
    }
}
HeaderComponent.decorators = [
    { type: Component, args: [{
                selector: 'app-header',
                templateUrl: './header.component.html'
            },] },
];
/**
 * @nocollapse
 */
HeaderComponent.ctorParameters = () => [];
function HeaderComponent_tsickle_Closure_declarations() {
    /** @type {?} */
    HeaderComponent.decorators;
    /**
     * @nocollapse
     * @type {?}
     */
    HeaderComponent.ctorParameters;
    /** @type {?} */
    HeaderComponent.prototype.vis;
}
