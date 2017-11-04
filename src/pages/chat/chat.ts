import { Component,ViewChild } from '@angular/core';
import { NavController , NavParams} from 'ionic-angular';;
import { AngularFireDatabase } from "angularfire2/database-deprecated";

@Component({
  selector: 'page-chat',
  templateUrl: 'chat.html'
})
export class ChatPage {

   username : string;
   @ViewChild('message') message;
   s;
   messages : object[]=[];

  constructor(public db: AngularFireDatabase, public navCtrl: NavController,public navp : NavParams) {
  this.username=this.navp.get('Username');
  this.s = this.db.list('/chat').subscribe( data => {
    this.messages = data;
  });

 
  }

  ionViewDidLoad() {
    this.db.list('/chat').push({
      specialMessage: true,
      message: `${this.username} has joined the room`
    });
  }

  ionViewWillLeave(){
    this.s.unsubscribe();
    this.db.list('/chat').push({
      specialMessage: true,
      message: `${this.username} has left the room`
    });
  }

  sendMessage(){
    this.db.list('/chat').push({
      username : this.username,
      message : this.message.value
    }) 
    this.message.value = '';
  }

}
