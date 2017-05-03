/**
 * @fileoverview This file is generated by the Angular template compiler.
 * Do not edit.
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride}
 */
/* tslint:disable */
import * as import0 from '@angular/core';
import * as import1 from './header.component';
import * as import2 from '@angular/router';
import * as import3 from '@angular/common';
const /** @type {?} */ styles_HeaderComponent = (([]));
export const /** @type {?} */ RenderType_HeaderComponent = import0.ɵcrt({
    encapsulation: 2,
    styles: styles_HeaderComponent,
    data: {}
});
/**
 * @param {?} l
 * @return {?}
 */
export function View_HeaderComponent_0(l) {
    return import0.ɵvid(0, [
        (l()(), import0.ɵeld(0, ((null)), ((null)), 18, 'nav', [
            [
                'class',
                'w3-sidenav w3-white w3-card-2  w3-large'
            ],
            [
                'id',
                'SNav'
            ]
        ], [[
                8,
                'hidden',
                0
            ]
        ], ((null)), ((null)), ((null)), ((null)))),
        (l()(), import0.ɵted(((null)), ['\n  '])),
        (l()(), import0.ɵeld(0, ((null)), ((null)), 1, 'a', [
            [
                'class',
                'w3-closenav w3-xlarge w3-right-align'
            ],
            [
                'href',
                '#'
            ],
            [
                'id',
                'navX'
            ]
        ], ((null)), [[
                ((null)),
                'click'
            ]
        ], (v, en, $event) => {
            var /** @type {?} */ ad = true;
            var /** @type {?} */ co = v.component;
            if (('click' === en)) {
                const /** @type {?} */ pd_0 = (((co.hide())) !== false);
                ad = (pd_0 && ad);
            }
            return ad;
        }, ((null)), ((null)))),
        (l()(), import0.ɵted(((null)), ['×'])),
        (l()(), import0.ɵted(((null)), ['\n  '])),
        (l()(), import0.ɵeld(0, ((null)), ((null)), 5, 'a', [
            [
                'routerLink',
                '/welcome'
            ],
            [
                'routerLinkActive',
                'active'
            ]
        ], [
            [
                1,
                'target',
                0
            ],
            [
                8,
                'href',
                4
            ]
        ], [[
                ((null)),
                'click'
            ]
        ], (v, en, $event) => {
            var /** @type {?} */ ad = true;
            var /** @type {?} */ co = v.component;
            if (('click' === en)) {
                const /** @type {?} */ pd_0 = (((import0.ɵnov(v, 6).onClick($event.button, $event.ctrlKey, $event.metaKey))) !== false);
                ad = (pd_0 && ad);
            }
            if (('click' === en)) {
                const /** @type {?} */ pd_1 = (((co.hide())) !== false);
                ad = (pd_1 && ad);
            }
            return ad;
        }, ((null)), ((null)))),
        import0.ɵdid(335872, [[
                2,
                4
            ]
        ], 0, import2.RouterLinkWithHref, [
            import2.Router,
            import2.ActivatedRoute,
            import3.LocationStrategy
        ], { routerLink: [
                0,
                'routerLink'
            ]
        }, ((null))),
        import0.ɵdid(860160, ((null)), 2, import2.RouterLinkActive, [
            import2.Router,
            import0.ElementRef,
            import0.Renderer,
            import0.ChangeDetectorRef
        ], { routerLinkActive: [
                0,
                'routerLinkActive'
            ]
        }, ((null))),
        import0.ɵqud(301989888, 1, { links: 1 }),
        import0.ɵqud(301989888, 2, { linksWithHrefs: 1 }),
        (l()(), import0.ɵted(((null)), ['Home'])),
        (l()(), import0.ɵted(((null)), ['\n  '])),
        (l()(), import0.ɵeld(0, ((null)), ((null)), 5, 'a', [
            [
                'routerLink',
                '/lookup'
            ],
            [
                'routerLinkActive',
                'active'
            ]
        ], [
            [
                1,
                'target',
                0
            ],
            [
                8,
                'href',
                4
            ]
        ], [[
                ((null)),
                'click'
            ]
        ], (v, en, $event) => {
            var /** @type {?} */ ad = true;
            var /** @type {?} */ co = v.component;
            if (('click' === en)) {
                const /** @type {?} */ pd_0 = (((import0.ɵnov(v, 13).onClick($event.button, $event.ctrlKey, $event.metaKey))) !== false);
                ad = (pd_0 && ad);
            }
            if (('click' === en)) {
                const /** @type {?} */ pd_1 = (((co.hide())) !== false);
                ad = (pd_1 && ad);
            }
            return ad;
        }, ((null)), ((null)))),
        import0.ɵdid(335872, [[
                4,
                4
            ]
        ], 0, import2.RouterLinkWithHref, [
            import2.Router,
            import2.ActivatedRoute,
            import3.LocationStrategy
        ], { routerLink: [
                0,
                'routerLink'
            ]
        }, ((null))),
        import0.ɵdid(860160, ((null)), 2, import2.RouterLinkActive, [
            import2.Router,
            import0.ElementRef,
            import0.Renderer,
            import0.ChangeDetectorRef
        ], { routerLinkActive: [
                0,
                'routerLinkActive'
            ]
        }, ((null))),
        import0.ɵqud(301989888, 3, { links: 1 }),
        import0.ɵqud(301989888, 4, { linksWithHrefs: 1 }),
        (l()(), import0.ɵted(((null)), ['Lookup Building'])),
        (l()(), import0.ɵted(((null)), ['\n'])),
        (l()(), import0.ɵted(((null)), ['\n\n'])),
        (l()(), import0.ɵeld(0, ((null)), ((null)), 7, 'header', [[
                'class',
                'w3-container w3-xlarge w3-text-shadow w3-text-white w3-theme-d5'
            ]
        ], ((null)), ((null)), ((null)), ((null)), ((null)))),
        (l()(), import0.ɵted(((null)), ['\n  '])),
        (l()(), import0.ɵeld(0, ((null)), ((null)), 1, 'span', [
            [
                'class',
                'w3-opennav'
            ],
            [
                'id',
                'menu'
            ]
        ], ((null)), [[
                ((null)),
                'click'
            ]
        ], (v, en, $event) => {
            var /** @type {?} */ ad = true;
            var /** @type {?} */ co = v.component;
            if (('click' === en)) {
                const /** @type {?} */ pd_0 = (((co.show())) !== false);
                ad = (pd_0 && ad);
            }
            return ad;
        }, ((null)), ((null)))),
        (l()(), import0.ɵted(((null)), ['☰'])),
        (l()(), import0.ɵted(((null)), ['\n  '])),
        (l()(), import0.ɵeld(0, ((null)), ((null)), 1, 'span', [[
                'class',
                'w3-right-align'
            ]
        ], ((null)), ((null)), ((null)), ((null)), ((null)))),
        (l()(), import0.ɵted(((null)), ['JDMDL FES APP'])),
        (l()(), import0.ɵted(((null)), ['\n'])),
        (l()(), import0.ɵted(((null)), ['\n']))
    ], (ck, v) => {
        const /** @type {?} */ currVal_3 = '/welcome';
        ck(v, 6, 0, currVal_3);
        const /** @type {?} */ currVal_4 = 'active';
        ck(v, 7, 0, currVal_4);
        const /** @type {?} */ currVal_7 = '/lookup';
        ck(v, 13, 0, currVal_7);
        const /** @type {?} */ currVal_8 = 'active';
        ck(v, 14, 0, currVal_8);
    }, (ck, v) => {
        var /** @type {?} */ co = v.component;
        const /** @type {?} */ currVal_0 = co.vis;
        ck(v, 0, 0, currVal_0);
        const /** @type {?} */ currVal_1 = import0.ɵnov(v, 6).target;
        const /** @type {?} */ currVal_2 = import0.ɵnov(v, 6).href;
        ck(v, 5, 0, currVal_1, currVal_2);
        const /** @type {?} */ currVal_5 = import0.ɵnov(v, 13).target;
        const /** @type {?} */ currVal_6 = import0.ɵnov(v, 13).href;
        ck(v, 12, 0, currVal_5, currVal_6);
    });
}
/**
 * @param {?} l
 * @return {?}
 */
function View_HeaderComponent_Host_0(l) {
    return import0.ɵvid(0, [
        (l()(), import0.ɵeld(0, ((null)), ((null)), 1, 'app-header', (([])), ((null)), ((null)), ((null)), View_HeaderComponent_0, RenderType_HeaderComponent)),
        import0.ɵdid(57344, ((null)), 0, import1.HeaderComponent, (([])), ((null)), ((null)))
    ], (ck, v) => {
        ck(v, 1, 0);
    }, ((null)));
}
export const /** @type {?} */ HeaderComponentNgFactory = import0.ɵccf('app-header', import1.HeaderComponent, View_HeaderComponent_Host_0, {}, {}, (([])));