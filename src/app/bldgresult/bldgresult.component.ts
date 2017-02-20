import { Component, OnInit } from '@angular/core';
import { BldgtransportService } from '../bldgtransport.service';

@Component({
  templateUrl: './bldgresult.component.html'
})
export class BldgResultComponent implements OnInit {

  msg:Object;

  constructor(private bldg:BldgtransportService) {

    this.msg = {};

  }

  ngOnInit() {
    this.msg = this.bldg.doc;
  }


}
