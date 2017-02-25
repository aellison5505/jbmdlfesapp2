import { Injectable } from '@angular/core';
import * as PouchDB from 'pouchdb';

@Injectable()
export class LocalDBService {

  db;
  remoteDB;
  public ival;
  cleari:boolean;


  constructor() {
    this.db = null;
    this.remoteDB = null;
    this.ival = null;
    this.cleari = false;
  }

  private cleanup(): void {
      console.log("clean");
      this.remoteDB.compact().then((res) => {
        console.log("pact");
      }).catch((err) => {
        console.log("errp");
      });
      this.db.compact().then((res1) => {
        console.log("pact2");
      });;
  }

  private sync(): void {
    if(this.cleari){
      console.log("clear");
      clearInterval(this.ival);
      return;
    }
    this.remoteDB = new PouchDB('https://jbmdl_app:app_jbmdl@app.mobilewebapp.net:8000/lke_grid/');
    this.db.replicate.from(this.remoteDB).on('complete', () => {
      console.log('syn');
      this.cleari = true;
      this.cleanup();

    //  this.ival = null;

    }).on('error', (err) => {
      console.log(err);

    });
    this.remoteDB = null;
  }

  public init() {
    this.db = new PouchDB('jbmdl_grid_db', {
      skip_setup: false
    });
    this.ival = setInterval(() => {
      this.sync();
    }, 10000);
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
