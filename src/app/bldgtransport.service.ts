import { Injectable } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Injectable()
export class BldgtransportService {

  doc:Object;

  constructor() {

    this.doc = {};

  }

  passDoc(pass):void {

    this.doc = pass;
    console.log("emit"+JSON.stringify(this.doc));
  }

}
