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
  ages: {age_num: string}[] = [];
  nations: {nation: string}[] = [];
  genders: {gender: string}[] = [];
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
      this.ages.push({age_num: data['age']});
    }, (err) => {
        console.log(err);
      })

      this.http.get('https://api.nationalize.io/?name=' + user['name']).subscribe((data) => {
      this.nations.push({nation: data['country']});
      console.log(this.nations[0]);
    }, (err) => {
        console.log(err);
      })

      this.http.get('https://api.genderize.io/?name=' + user['name']).subscribe((data) => {
        this.genders.push({gender: data['gender']});
      }, (err) => {
          console.log(err);
        })

  }

}
