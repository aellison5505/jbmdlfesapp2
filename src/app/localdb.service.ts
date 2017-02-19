import { Injectable } from '@angular/core';
import * as PouchDB from 'pouchdb';

@Injectable()
export class LocalDBService {

  db;
  remoteDB;

  constructor() {

  }

  private sync():void {
    this.remoteDB = new PouchDB('https://jbmdl_app:app_jbmdl@app.mobilewebapp.net:8000/test_db/');
		this.db.replicate.from(this.remoteDB).on('complete', function () {
			console.log("syn");
		//	$rootScope.$emit('callFileDone', 'DB Loaded');
		}).on('error', function (err) {
			console.log(err);
		});
		this.remoteDB = null;
  }

  public init() {
    this.db = new  PouchDB('jbmdl_db', {
				skip_setup: false
			});

    this.db.info().then((info) => {
			console.log(info);
      this.sync();
		}).catch ((err) => {
			console.log("error db setup "+err);
		});

  }

  public get(pull:string): Promise<String> {
    return new Promise((resolve, reject) => {
      this.db.get(pull).then((doc) => {
				console.log(doc);
				resolve(doc);
			}).catch ((err) => {
				reject(err);
			});
  });
  }



}
