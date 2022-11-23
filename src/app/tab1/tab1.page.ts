import { Component } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage';
import { Preferences } from '@capacitor/preferences';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  private storage: Storage;
  images: {message: string}[] = [];

  constructor(private http:HttpClient, private router:Router) {
    this.http.get('https://dog.ceo/api/breeds/image/random').subscribe((data) => {
      this.images.push({message: data['message']});
    }, (err) => {
        console.log(err);
      })
      
  }

  goToPredictions(){
    const name = document.getElementById("name") as HTMLInputElement;
    const error = document.getElementById("err");
    if(name.value == ""){
error.innerText = "Please enter your name!";
    }else{
    Preferences.set({
key: 'user',
value: JSON.stringify({
name: name.value
})
    });
    this.router.navigate(["/tabs/tab2"]);
  }
  }

  


}

