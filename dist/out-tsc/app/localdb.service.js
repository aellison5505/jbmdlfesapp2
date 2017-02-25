var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Injectable } from '@angular/core';
import * as PouchDB from 'pouchdb';
var LocalDBService = (function () {
    function LocalDBService() {
        this.db = null;
        this.remoteDB = null;
        this.ival = null;
        this.cleari = false;
    }
    LocalDBService.prototype.cleanup = function () {
        console.log("clean");
        this.remoteDB.compact().then(function (res) {
            console.log("pact");
        }).catch(function (err) {
            console.log("errp");
        });
        this.db.compact().then(function (res1) {
            console.log("pact2");
        });
        ;
    };
    LocalDBService.prototype.sync = function () {
        var _this = this;
        if (this.cleari) {
            console.log("clear");
            clearInterval(this.ival);
            return;
        }
        this.remoteDB = new PouchDB('https://jbmdl_app:app_jbmdl@app.mobilewebapp.net:8000/lke_grid/');
        this.db.replicate.from(this.remoteDB).on('complete', function () {
            console.log('syn');
            _this.cleari = true;
            _this.cleanup();
        }).on('error', function (err) {
            console.log(err);
        });
        this.remoteDB = null;
    };
    LocalDBService.prototype.init = function () {
        var _this = this;
        this.db = new PouchDB('jbmdl_grid_db', {
            skip_setup: false
        });
        this.ival = setInterval(function () {
            _this.sync();
        }, 10000);
        this.db.info().then(function (info) {
            console.log(info);
            if (info.doc_count > 0) {
                console.log('db built');
            }
            else {
                console.log('need docs');
            }
            _this.sync();
        }).catch(function (err) {
            console.log('error db setup' + err);
        });
    };
    LocalDBService.prototype.get = function (pull) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.db.get(pull).then(function (doc) {
                console.log(doc);
                resolve(doc);
            }).catch(function (err) {
                reject(err);
            });
        });
    };
    return LocalDBService;
}());
LocalDBService = __decorate([
    Injectable(),
    __metadata("design:paramtypes", [])
], LocalDBService);
export { LocalDBService };
//# sourceMappingURL=../../../src/app/localdb.service.js.map