import { Injectable } from '@angular/core';
import * as PouchDB from 'pouchdb';

@Injectable()
export class LocalDBService {

  db;
  remoteDB;
  ival;


  constructor() {
    this.db = null;
    this.remoteDB = null;
    this.ival = null;
  }

  private sync(): void {
    this.remoteDB = new PouchDB('https://jbmdl_app:app_jbmdl@app.mobilewebapp.net:8000/test_db/');
    this.db.replicate.from(this.remoteDB).on('complete', () => {
      console.log('syn');
      clearInterval(this.ival);
      this.ival = null;

    }).on('error', (err) => {
      console.log(err);
      if (this.ival === null) {
        this.ival = setInterval(() => {
          this.sync();
        }, 10000);
      }
    });
    this.remoteDB = null;
  }

  public init() {
    this.db = new PouchDB('jbmdl_db', {
      skip_setup: false
    });

    this.db.info().then((info) => {
      console.log(info);
      if(info.doc_count>0){
        console.log('db built');
      }else{
        console.log('need docs');
      }
      this.sync();
    }).catch((err) => {
      console.log('error db setup' + err);
    });

  }

  public get(pull: string): Promise<String> {
    return new Promise((resolve, reject) => {
      this.db.get(pull).then((doc) => {
        console.log(doc);
        resolve(doc);
      }).catch((err) => {
        reject(err);
      });
    });
  }



}
