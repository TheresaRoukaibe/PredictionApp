import { Component } from '@angular/core';
import { Storage } from '@ionic/storage';
import { Preferences } from '@capacitor/preferences';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  constructor() {
    this.getName();
  }

  async getName(){
    const ret = await Preferences.get({key: 'user'});
    const user = JSON.parse(ret.value);
    console.log(user);
  }

}
