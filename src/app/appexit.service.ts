import { Injectable } from '@angular/core';

@Injectable()
export class AppExitService {

  navigator: any;

  constructor() {
    this.navigator = window.navigator;

  }

  exitApp(): void {
    let r = confirm('Are you sure you want to exit?');
    if (r === true) {

      if (this.navigator.app) {
        this.navigator.app.exitApp();
      }else if (this.navigator.device) {
        this.navigator.device.exitApp();
      } else {
        window.close();

        // window.location.href = "http://new";

      }
    }
  }

}
