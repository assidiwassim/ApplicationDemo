import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {PopPage} from '../pop/pop';
import {ContactPage} from '../contact/contact';




@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

  contactMe(){
    this.navCtrl.push(ContactPage);
  }
  
  popMe(){
    this.navCtrl.push(PopPage);
  }

}
