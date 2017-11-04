import { Component  } from '@angular/core';
import { NavController   } from 'ionic-angular';
import { SignupPage } from '../signup/signup';
import { LoginPage } from '../login/login';



@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {




  constructor(public navCtrl: NavController) {

  }

  Login(){
    this.navCtrl.push(LoginPage);
  
    }

    SignUp(){
      this.navCtrl.push(SignupPage);
      
        }

}
