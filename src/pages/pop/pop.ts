import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-pop',
  templateUrl: 'pop.html'
})
export class PopPage {

  constructor(public navCtrl: NavController) {

  }


  GoBack(){
    this.navCtrl.pop();
    }
}
