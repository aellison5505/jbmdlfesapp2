import { Component, OnInit } from '@angular/core';
import { AppExitService } from '../appexit.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})

export class HeaderComponent implements OnInit {

  vis: boolean;


  constructor(private appexit: AppExitService) {
    this.vis = true;

  }

  show() {
    this.vis = false;
  }

  hide() {
    this.vis = true;
  }

  exit():void {
      this.appexit.exitApp();
      this.hide();
  }

  ngOnInit() {

  }

}
