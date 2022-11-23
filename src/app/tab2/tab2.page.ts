import { Component } from '@angular/core';
import { Storage } from '@ionic/storage';
import { Preferences } from '@capacitor/preferences';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { getRenderingRef } from 'ionicons/dist/types/stencil-public-runtime';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  users: {age: string}[] = [];

  constructor(private http:HttpClient) {
     this.getName();
  }

  async getName(){
    const ret = await Preferences.get({key: 'user'});
    const user = JSON.parse(ret.value);
    const greeting = document.getElementById('title');
    const greetingAnd = document.getElementById('titleAndroid');
    greeting.innerText = "Welcome " + user['name'] + "!";
    greetingAnd.innerText = "Welcome " + user['name'] + "!";
    this.http.get('https://api.agify.io/?name=' + user['name']).subscribe((data) => {
      this.users.push({age: data['age']});
    }, (err) => {
        console.log(err);
      })
  }

}
