import { Component , ViewChild} from '@angular/core';
import { NavController } from 'ionic-angular';
import { ChatPage } from '../chat/chat';

@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {

  @ViewChild('Username') Username;
  constructor(public navCtrl: NavController ) {

  }
  Login(){
    this.navCtrl.push(ChatPage,{'Username' : this.Username.value} );
  }
  

}
