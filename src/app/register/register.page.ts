import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';


export class User {
  email: string;
  password: string;
}

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  public user: User = new User();


  constructor(public fAuth: AngularFireAuth) { }

  ngOnInit() {
  }

  async register() {
    try {
      let r = await this.fAuth.auth.createUserWithEmailAndPassword(
        this.user.email,
        this.user.password
      );
      if (r) {
        console.log("Successfully registered!");
        //this.navCtrl.setRoot('LoginPage');
      }

    } catch (err) {
      console.error(err);
    }
  }

}
