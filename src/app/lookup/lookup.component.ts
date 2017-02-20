import { Component, OnInit } from '@angular/core';
import { LocalDBService } from '../localdb.service';
import { BldgtransportService } from '../bldgtransport.service';
import {Router} from '@angular/router';

@Component({
  templateUrl: './lookup.component.html'
})
export class LookupComponent implements OnInit {

  err: String;

  bldg;
  doc;

  constructor(private router: Router, private localdb: LocalDBService, private trans: BldgtransportService) {


    //    this.err = "test error";

  }
  ngOnInit() {

  }

  sub() {
    //    this.err = this.bldg;
    if (isNaN(this.bldg)) {
      this.err = "Please enter numbers only!";
    } else {
      console.log(this.bldg);
      this.localdb.get(this.bldg).then((doc) => {
        this.err = "";
        console.log(doc);
        this.doc = doc;
        this.trans.passDoc(this.doc);
        this.router.navigateByUrl('/bldgresult');

      }).catch((err) => {
        if(err.status === 404){
          this.err = "Building is not found!";
        }else{
          this.err = err.name + ": "+err.message;
        }
        console.log(err);
      });
    }
  }

}
