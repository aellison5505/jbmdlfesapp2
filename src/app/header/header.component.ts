import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})

export class HeaderComponent implements OnInit {

  vis: boolean;


  constructor() {
    this.vis = true;

  }

  show() {
    this.vis = false;
  }

  hide() {
    this.vis = true;
  }

  ngOnInit() {

  }

}
