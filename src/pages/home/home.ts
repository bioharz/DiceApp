import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {DiceModel} from "../../models/dice-model";
import {DiceProvider} from "../../providers/dice/dice";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  private dice : DiceModel;

  constructor(public navCtrl: NavController, private diceProvider: DiceProvider) {
    this.dice = new DiceModel();
  }

  throw() {
    this.dice.setNumber(this.diceProvider.rndGenerator());
  }

  exit() {
    this.diceProvider.exit();
  }

}
