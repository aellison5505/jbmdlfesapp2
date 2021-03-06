/**
 * @fileoverview This file is generated by the Angular template compiler.
 * Do not edit.
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride}
 */
 /* tslint:disable */


import * as import0 from '@angular/core';
import * as import1 from '../../../src/app/app.module';
import * as import2 from '@angular/common';
import * as import3 from '@angular/router';
import * as import4 from '@angular/platform-browser';
import * as import5 from '@angular/forms';
import * as import6 from '@angular/http';
import * as import7 from '../../../src/app/localdb.service';
import * as import8 from '../../../src/app/bldgtransport.service';
import * as import9 from './welcome/welcome.component.ngfactory';
import * as import10 from './lookup/lookup.component.ngfactory';
import * as import11 from './bldgresult/bldgresult.component.ngfactory';
import * as import12 from './app.component.ngfactory';
import * as import13 from '../../../src/app/welcome/welcome.component';
import * as import14 from '../../../src/app/lookup/lookup.component';
import * as import15 from '../../../src/app/bldgresult/bldgresult.component';
class AppModuleInjector extends import0.ɵNgModuleInjector<import1.AppModule> {
  _CommonModule_0:import2.CommonModule;
  _ErrorHandler_1:any;
  _NgProbeToken_2:any[];
  _ɵg_3:import3.ɵg;
  _APP_INITIALIZER_4:any[];
  _ApplicationInitStatus_5:import0.ApplicationInitStatus;
  _ɵf_6:import0.ɵf;
  _ApplicationRef_7:any;
  _ApplicationModule_8:import0.ApplicationModule;
  _BrowserModule_9:import4.BrowserModule;
  _ɵba_10:import5.ɵba;
  _FormsModule_11:import5.FormsModule;
  _HttpModule_12:import6.HttpModule;
  _ɵa_13:any;
  _UrlSerializer_14:import3.DefaultUrlSerializer;
  _RouterOutletMap_15:import3.RouterOutletMap;
  _ROUTER_CONFIGURATION_16:any;
  _LocationStrategy_17:any;
  _Location_18:import2.Location;
  _Compiler_19:import0.Compiler;
  _NgModuleFactoryLoader_20:import0.SystemJsNgModuleLoader;
  _ROUTES_21:any[];
  _Router_22:any;
  _RouterModule_23:import3.RouterModule;
  _AppModule_24:import1.AppModule;
  __LOCALE_ID_25:any;
  __NgLocalization_26:import2.NgLocaleLocalization;
  __APP_ID_27:any;
  __IterableDiffers_28:any;
  __KeyValueDiffers_29:any;
  __DomSanitizer_30:import4.ɵe;
  __Sanitizer_31:any;
  __HAMMER_GESTURE_CONFIG_32:import4.HammerGestureConfig;
  __EVENT_MANAGER_PLUGINS_33:any[];
  __EventManager_34:import4.EventManager;
  __ɵDomSharedStylesHost_35:import4.ɵDomSharedStylesHost;
  __ɵDomRendererFactory2_36:import4.ɵDomRendererFactory2;
  __RendererFactory2_37:any;
  __ɵSharedStylesHost_38:any;
  __Testability_39:import0.Testability;
  __Meta_40:import4.Meta;
  __Title_41:import4.Title;
  __ɵi_42:import5.ɵi;
  __BrowserXhr_43:import6.BrowserXhr;
  __ResponseOptions_44:import6.BaseResponseOptions;
  __XSRFStrategy_45:any;
  __XHRBackend_46:import6.XHRBackend;
  __RequestOptions_47:import6.BaseRequestOptions;
  __Http_48:any;
  __ActivatedRoute_49:any;
  __NoPreloading_50:import3.NoPreloading;
  __PreloadingStrategy_51:any;
  __RouterPreloader_52:import3.RouterPreloader;
  __PreloadAllModules_53:import3.PreloadAllModules;
  __ROUTER_INITIALIZER_54:any;
  __APP_BOOTSTRAP_LISTENER_55:any[];
  __LocalDBService_56:import7.LocalDBService;
  __BldgtransportService_57:import8.BldgtransportService;
  constructor(parent:import0.Injector) {
    super(parent,[
      import9.WelcomeComponentNgFactory,
      import10.LookupComponentNgFactory,
      import11.BldgResultComponentNgFactory,
      import12.AppComponentNgFactory
    ]
    ,[import12.AppComponentNgFactory]);
  }
  get _LOCALE_ID_25():any {
    if ((this.__LOCALE_ID_25 == null)) { (this.__LOCALE_ID_25 = import0.ɵn(this.parent.get(import0.LOCALE_ID,(null as any)))); }
    return this.__LOCALE_ID_25;
  }
  get _NgLocalization_26():import2.NgLocaleLocalization {
    if ((this.__NgLocalization_26 == null)) { (this.__NgLocalization_26 = new import2.NgLocaleLocalization(this._LOCALE_ID_25)); }
    return this.__NgLocalization_26;
  }
  get _APP_ID_27():any {
    if ((this.__APP_ID_27 == null)) { (this.__APP_ID_27 = import0.ɵg()); }
    return this.__APP_ID_27;
  }
  get _IterableDiffers_28():any {
    if ((this.__IterableDiffers_28 == null)) { (this.__IterableDiffers_28 = import0.ɵl()); }
    return this.__IterableDiffers_28;
  }
  get _KeyValueDiffers_29():any {
    if ((this.__KeyValueDiffers_29 == null)) { (this.__KeyValueDiffers_29 = import0.ɵm()); }
    return this.__KeyValueDiffers_29;
  }
  get _DomSanitizer_30():import4.ɵe {
    if ((this.__DomSanitizer_30 == null)) { (this.__DomSanitizer_30 = new import4.ɵe(this.parent.get(import4.DOCUMENT))); }
    return this.__DomSanitizer_30;
  }
  get _Sanitizer_31():any {
    if ((this.__Sanitizer_31 == null)) { (this.__Sanitizer_31 = this._DomSanitizer_30); }
    return this.__Sanitizer_31;
  }
  get _HAMMER_GESTURE_CONFIG_32():import4.HammerGestureConfig {
    if ((this.__HAMMER_GESTURE_CONFIG_32 == null)) { (this.__HAMMER_GESTURE_CONFIG_32 = new import4.HammerGestureConfig()); }
    return this.__HAMMER_GESTURE_CONFIG_32;
  }
  get _EVENT_MANAGER_PLUGINS_33():any[] {
    if ((this.__EVENT_MANAGER_PLUGINS_33 == null)) { (this.__EVENT_MANAGER_PLUGINS_33 = [
      new import4.ɵDomEventsPlugin(this.parent.get(import4.DOCUMENT)),
      new import4.ɵKeyEventsPlugin(this.parent.get(import4.DOCUMENT)),
      new import4.ɵHammerGesturesPlugin(this.parent.get(import4.DOCUMENT),this._HAMMER_GESTURE_CONFIG_32)
    ]
    ); }
    return this.__EVENT_MANAGER_PLUGINS_33;
  }
  get _EventManager_34():import4.EventManager {
    if ((this.__EventManager_34 == null)) { (this.__EventManager_34 = new import4.EventManager(this._EVENT_MANAGER_PLUGINS_33,this.parent.get(import0.NgZone))); }
    return this.__EventManager_34;
  }
  get _ɵDomSharedStylesHost_35():import4.ɵDomSharedStylesHost {
    if ((this.__ɵDomSharedStylesHost_35 == null)) { (this.__ɵDomSharedStylesHost_35 = new import4.ɵDomSharedStylesHost(this.parent.get(import4.DOCUMENT))); }
    return this.__ɵDomSharedStylesHost_35;
  }
  get _ɵDomRendererFactory2_36():import4.ɵDomRendererFactory2 {
    if ((this.__ɵDomRendererFactory2_36 == null)) { (this.__ɵDomRendererFactory2_36 = new import4.ɵDomRendererFactory2(this._EventManager_34,this._ɵDomSharedStylesHost_35)); }
    return this.__ɵDomRendererFactory2_36;
  }
  get _RendererFactory2_37():any {
    if ((this.__RendererFactory2_37 == null)) { (this.__RendererFactory2_37 = this._ɵDomRendererFactory2_36); }
    return this.__RendererFactory2_37;
  }
  get _ɵSharedStylesHost_38():any {
    if ((this.__ɵSharedStylesHost_38 == null)) { (this.__ɵSharedStylesHost_38 = this._ɵDomSharedStylesHost_35); }
    return this.__ɵSharedStylesHost_38;
  }
  get _Testability_39():import0.Testability {
    if ((this.__Testability_39 == null)) { (this.__Testability_39 = new import0.Testability(this.parent.get(import0.NgZone))); }
    return this.__Testability_39;
  }
  get _Meta_40():import4.Meta {
    if ((this.__Meta_40 == null)) { (this.__Meta_40 = new import4.Meta(this.parent.get(import4.DOCUMENT))); }
    return this.__Meta_40;
  }
  get _Title_41():import4.Title {
    if ((this.__Title_41 == null)) { (this.__Title_41 = new import4.Title(this.parent.get(import4.DOCUMENT))); }
    return this.__Title_41;
  }
  get _ɵi_42():import5.ɵi {
    if ((this.__ɵi_42 == null)) { (this.__ɵi_42 = new import5.ɵi()); }
    return this.__ɵi_42;
  }
  get _BrowserXhr_43():import6.BrowserXhr {
    if ((this.__BrowserXhr_43 == null)) { (this.__BrowserXhr_43 = new import6.BrowserXhr()); }
    return this.__BrowserXhr_43;
  }
  get _ResponseOptions_44():import6.BaseResponseOptions {
    if ((this.__ResponseOptions_44 == null)) { (this.__ResponseOptions_44 = new import6.BaseResponseOptions()); }
    return this.__ResponseOptions_44;
  }
  get _XSRFStrategy_45():any {
    if ((this.__XSRFStrategy_45 == null)) { (this.__XSRFStrategy_45 = import6.ɵb()); }
    return this.__XSRFStrategy_45;
  }
  get _XHRBackend_46():import6.XHRBackend {
    if ((this.__XHRBackend_46 == null)) { (this.__XHRBackend_46 = new import6.XHRBackend(this._BrowserXhr_43,this._ResponseOptions_44,this._XSRFStrategy_45)); }
    return this.__XHRBackend_46;
  }
  get _RequestOptions_47():import6.BaseRequestOptions {
    if ((this.__RequestOptions_47 == null)) { (this.__RequestOptions_47 = new import6.BaseRequestOptions()); }
    return this.__RequestOptions_47;
  }
  get _Http_48():any {
    if ((this.__Http_48 == null)) { (this.__Http_48 = import6.ɵc(this._XHRBackend_46,this._RequestOptions_47)); }
    return this.__Http_48;
  }
  get _ActivatedRoute_49():any {
    if ((this.__ActivatedRoute_49 == null)) { (this.__ActivatedRoute_49 = import3.ɵf(this._Router_22)); }
    return this.__ActivatedRoute_49;
  }
  get _NoPreloading_50():import3.NoPreloading {
    if ((this.__NoPreloading_50 == null)) { (this.__NoPreloading_50 = new import3.NoPreloading()); }
    return this.__NoPreloading_50;
  }
  get _PreloadingStrategy_51():any {
    if ((this.__PreloadingStrategy_51 == null)) { (this.__PreloadingStrategy_51 = this._NoPreloading_50); }
    return this.__PreloadingStrategy_51;
  }
  get _RouterPreloader_52():import3.RouterPreloader {
    if ((this.__RouterPreloader_52 == null)) { (this.__RouterPreloader_52 = new import3.RouterPreloader(this._Router_22,this._NgModuleFactoryLoader_20,this._Compiler_19,this,this._PreloadingStrategy_51)); }
    return this.__RouterPreloader_52;
  }
  get _PreloadAllModules_53():import3.PreloadAllModules {
    if ((this.__PreloadAllModules_53 == null)) { (this.__PreloadAllModules_53 = new import3.PreloadAllModules()); }
    return this.__PreloadAllModules_53;
  }
  get _ROUTER_INITIALIZER_54():any {
    if ((this.__ROUTER_INITIALIZER_54 == null)) { (this.__ROUTER_INITIALIZER_54 = import3.ɵi(this._ɵg_3)); }
    return this.__ROUTER_INITIALIZER_54;
  }
  get _APP_BOOTSTRAP_LISTENER_55():any[] {
    if ((this.__APP_BOOTSTRAP_LISTENER_55 == null)) { (this.__APP_BOOTSTRAP_LISTENER_55 = [this._ROUTER_INITIALIZER_54]); }
    return this.__APP_BOOTSTRAP_LISTENER_55;
  }
  get _LocalDBService_56():import7.LocalDBService {
    if ((this.__LocalDBService_56 == null)) { (this.__LocalDBService_56 = new import7.LocalDBService()); }
    return this.__LocalDBService_56;
  }
  get _BldgtransportService_57():import8.BldgtransportService {
    if ((this.__BldgtransportService_57 == null)) { (this.__BldgtransportService_57 = new import8.BldgtransportService()); }
    return this.__BldgtransportService_57;
  }
  createInternal():import1.AppModule {
    this._CommonModule_0 = new import2.CommonModule();
    this._ErrorHandler_1 = import4.ɵa();
    this._NgProbeToken_2 = [import3.ɵb()];
    this._ɵg_3 = new import3.ɵg(this);
    this._APP_INITIALIZER_4 = [
      import0.ɵo,
      import4.ɵc(this.parent.get(import4.NgProbeToken,(null as any)),this._NgProbeToken_2),
      import3.ɵh(this._ɵg_3)
    ]
    ;
    this._ApplicationInitStatus_5 = new import0.ApplicationInitStatus(this._APP_INITIALIZER_4);
    this._ɵf_6 = new import0.ɵf(this.parent.get(import0.NgZone),this.parent.get(import0.ɵConsole),this,this._ErrorHandler_1,this.componentFactoryResolver,this._ApplicationInitStatus_5);
    this._ApplicationRef_7 = this._ɵf_6;
    this._ApplicationModule_8 = new import0.ApplicationModule(this._ApplicationRef_7);
    this._BrowserModule_9 = new import4.BrowserModule(this.parent.get(import4.BrowserModule,(null as any)));
    this._ɵba_10 = new import5.ɵba();
    this._FormsModule_11 = new import5.FormsModule();
    this._HttpModule_12 = new import6.HttpModule();
    this._ɵa_13 = import3.ɵd(this.parent.get(import3.Router,(null as any)));
    this._UrlSerializer_14 = new import3.DefaultUrlSerializer();
    this._RouterOutletMap_15 = new import3.RouterOutletMap();
    this._ROUTER_CONFIGURATION_16 = {useHash: true};
    this._LocationStrategy_17 = import3.ɵc(this.parent.get(import2.PlatformLocation),this.parent.get(import2.APP_BASE_HREF,(null as any)),this._ROUTER_CONFIGURATION_16);
    this._Location_18 = new import2.Location(this._LocationStrategy_17);
    this._Compiler_19 = new import0.Compiler();
    this._NgModuleFactoryLoader_20 = new import0.SystemJsNgModuleLoader(this._Compiler_19,this.parent.get(import0.SystemJsNgModuleLoaderConfig,(null as any)));
      this._ROUTES_21 = [[
        {
          path: 'welcome',
          component: import13.WelcomeComponent
        }
        ,
        {
          path: 'lookup',
          component: import14.LookupComponent
        }
        ,
        {
          path: 'bldgresult',
          component: import15.BldgResultComponent
        }
        ,
        {
          path: '',
          redirectTo: '/welcome',
          pathMatch: 'full'
        }
        ,
        {
          path: '**',
          redirectTo: '/welcome'
        }

      ]
    ];
    this._Router_22 = import3.ɵe(this._ApplicationRef_7,this._UrlSerializer_14,this._RouterOutletMap_15,this._Location_18,this,this._NgModuleFactoryLoader_20,this._Compiler_19,this._ROUTES_21,this._ROUTER_CONFIGURATION_16,this.parent.get(import3.UrlHandlingStrategy,(null as any)),this.parent.get(import3.RouteReuseStrategy,(null as any)));
    this._RouterModule_23 = new import3.RouterModule(this._ɵa_13,this._Router_22);
    this._AppModule_24 = new import1.AppModule();
    return this._AppModule_24;
  }
  getInternal(token:any,notFoundResult:any):any {
    if ((token === import2.CommonModule)) { return this._CommonModule_0; }
    if ((token === import0.ErrorHandler)) { return this._ErrorHandler_1; }
    if ((token === import0.NgProbeToken)) { return this._NgProbeToken_2; }
    if ((token === import3.ɵg)) { return this._ɵg_3; }
    if ((token === import0.APP_INITIALIZER)) { return this._APP_INITIALIZER_4; }
    if ((token === import0.ApplicationInitStatus)) { return this._ApplicationInitStatus_5; }
    if ((token === import0.ɵf)) { return this._ɵf_6; }
    if ((token === import0.ApplicationRef)) { return this._ApplicationRef_7; }
    if ((token === import0.ApplicationModule)) { return this._ApplicationModule_8; }
    if ((token === import4.BrowserModule)) { return this._BrowserModule_9; }
    if ((token === import5.ɵba)) { return this._ɵba_10; }
    if ((token === import5.FormsModule)) { return this._FormsModule_11; }
    if ((token === import6.HttpModule)) { return this._HttpModule_12; }
    if ((token === import3.ɵa)) { return this._ɵa_13; }
    if ((token === import3.UrlSerializer)) { return this._UrlSerializer_14; }
    if ((token === import3.RouterOutletMap)) { return this._RouterOutletMap_15; }
    if ((token === import3.ROUTER_CONFIGURATION)) { return this._ROUTER_CONFIGURATION_16; }
    if ((token === import2.LocationStrategy)) { return this._LocationStrategy_17; }
    if ((token === import2.Location)) { return this._Location_18; }
    if ((token === import0.Compiler)) { return this._Compiler_19; }
    if ((token === import0.NgModuleFactoryLoader)) { return this._NgModuleFactoryLoader_20; }
    if ((token === import3.ROUTES)) { return this._ROUTES_21; }
    if ((token === import3.Router)) { return this._Router_22; }
    if ((token === import3.RouterModule)) { return this._RouterModule_23; }
    if ((token === import1.AppModule)) { return this._AppModule_24; }
    if ((token === import0.LOCALE_ID)) { return this._LOCALE_ID_25; }
    if ((token === import2.NgLocalization)) { return this._NgLocalization_26; }
    if ((token === import0.APP_ID)) { return this._APP_ID_27; }
    if ((token === import0.IterableDiffers)) { return this._IterableDiffers_28; }
    if ((token === import0.KeyValueDiffers)) { return this._KeyValueDiffers_29; }
    if ((token === import4.DomSanitizer)) { return this._DomSanitizer_30; }
    if ((token === import0.Sanitizer)) { return this._Sanitizer_31; }
    if ((token === import4.HAMMER_GESTURE_CONFIG)) { return this._HAMMER_GESTURE_CONFIG_32; }
    if ((token === import4.EVENT_MANAGER_PLUGINS)) { return this._EVENT_MANAGER_PLUGINS_33; }
    if ((token === import4.EventManager)) { return this._EventManager_34; }
    if ((token === import4.ɵDomSharedStylesHost)) { return this._ɵDomSharedStylesHost_35; }
    if ((token === import4.ɵDomRendererFactory2)) { return this._ɵDomRendererFactory2_36; }
    if ((token === import0.RendererFactory2)) { return this._RendererFactory2_37; }
    if ((token === import4.ɵSharedStylesHost)) { return this._ɵSharedStylesHost_38; }
    if ((token === import0.Testability)) { return this._Testability_39; }
    if ((token === import4.Meta)) { return this._Meta_40; }
    if ((token === import4.Title)) { return this._Title_41; }
    if ((token === import5.ɵi)) { return this._ɵi_42; }
    if ((token === import6.BrowserXhr)) { return this._BrowserXhr_43; }
    if ((token === import6.ResponseOptions)) { return this._ResponseOptions_44; }
    if ((token === import6.XSRFStrategy)) { return this._XSRFStrategy_45; }
    if ((token === import6.XHRBackend)) { return this._XHRBackend_46; }
    if ((token === import6.RequestOptions)) { return this._RequestOptions_47; }
    if ((token === import6.Http)) { return this._Http_48; }
    if ((token === import3.ActivatedRoute)) { return this._ActivatedRoute_49; }
    if ((token === import3.NoPreloading)) { return this._NoPreloading_50; }
    if ((token === import3.PreloadingStrategy)) { return this._PreloadingStrategy_51; }
    if ((token === import3.RouterPreloader)) { return this._RouterPreloader_52; }
    if ((token === import3.PreloadAllModules)) { return this._PreloadAllModules_53; }
    if ((token === import3.ROUTER_INITIALIZER)) { return this._ROUTER_INITIALIZER_54; }
    if ((token === import0.APP_BOOTSTRAP_LISTENER)) { return this._APP_BOOTSTRAP_LISTENER_55; }
    if ((token === import7.LocalDBService)) { return this._LocalDBService_56; }
    if ((token === import8.BldgtransportService)) { return this._BldgtransportService_57; }
    return notFoundResult;
  }
  destroyInternal():void {
    this._ɵf_6.ngOnDestroy();
    (this.__ɵDomSharedStylesHost_35 && this._ɵDomSharedStylesHost_35.ngOnDestroy());
    (this.__RouterPreloader_52 && this._RouterPreloader_52.ngOnDestroy());
  }
}
export const AppModuleNgFactory:import0.NgModuleFactory<import1.AppModule> = new import0.NgModuleFactory<any>(AppModuleInjector,import1.AppModule);
//# sourceMappingURL=data:application/json;base64,eyJmaWxlIjoiRDovZGV2L25ldC5tb2JpbGV3ZWJhcHAuamJtZGxmZXNhcHAvc3JjL2FwcC9hcHAubW9kdWxlLm5nZmFjdG9yeS50cyIsInZlcnNpb24iOjMsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIm5nOi8vL0Q6L2Rldi9uZXQubW9iaWxld2ViYXBwLmpibWRsZmVzYXBwL3NyYy9hcHAvYXBwLm1vZHVsZS50cyJdLCJzb3VyY2VzQ29udGVudCI6WyIgIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OyJ9
