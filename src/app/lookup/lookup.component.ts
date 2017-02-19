import { Component, OnInit } from '@angular/core';
import { LocalDBService } from '../localdb.service';
import {Router} from '@angular/router';

@Component({
  templateUrl: './lookup.component.html'
})
export class LookupComponent implements OnInit {

  err: String;
  parentRouter;
  bldg;

  constructor(private localdb: LocalDBService) {
    this.parentRouter = Router;
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
        console.log(doc);
      }).catch((err) => {
        console.log(err);
      });
    }
  }

}
