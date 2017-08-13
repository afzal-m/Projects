import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  display = "Text Test"

  constructor(public navCtrl: NavController) {

  }

  doSomething(){
    this.display = "You clicked it!"

  }

}
