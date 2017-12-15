import {Injectable} from '@angular/core';
import {Platform} from "ionic-angular";

@Injectable()
export class DiceProvider {

  constructor(public platform: Platform) {
  }

  rndGenerator() {
    return Math.floor((Math.random() * 6) + 1);
  }

  exit() {
    if (this.platform.is('cordova')) {
      this.platform.exitApp();
    } else {
      alert("Can't close web app, please run the App on a native device or emulator");
    }
  }

}
