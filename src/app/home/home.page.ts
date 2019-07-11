import { Component } from '@angular/core';
import { StatusBar } from '@ionic-native/status-bar/ngx';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  public shortAddress;

  constructor(private statusBar: StatusBar) {
    this.statusBar.overlaysWebView(true);
    this.shortAddress = 'Bosques de pinos 604';

    // set status bar to white
    this.statusBar.backgroundColorByHexString('#ffffff');

  }



}
