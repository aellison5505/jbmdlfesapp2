import { Component, OnInit } from '@angular/core';
import {LocalDBService } from './localdb.service';
import { AppExitService } from './appexit.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {

  constructor(private localdb: LocalDBService, private appexit: AppExitService) { }

  init(): void {
    this.localdb.init();
  }

  ngOnInit() {

    this.init();
    document.addEventListener('backbutton', (e) => {

       e.preventDefault();
       this.appexit.exitApp();

    },false);


  }
}
