import { Component, OnInit } from '@angular/core';
import {LocalDBService } from './localdb.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {

  constructor(private localdb: LocalDBService) { }

  init(): void {
    this.localdb.init();
  }

  ngOnInit() {

    this.init();

  }
}
