import { Component, OnInit } from '@angular/core';
import { BldgtransportService } from '../bldgtransport.service';

@Component({
  templateUrl: './bldgresult.component.html'
})
export class BldgResultComponent implements OnInit {

  msg;

  constructor(private bldg:BldgtransportService) {


  }

  ngOnInit() {
    this.msg = this.bldg.doc;
  }


}
