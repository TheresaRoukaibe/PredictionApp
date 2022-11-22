import { Component } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  images: {message: string}[] = [];
  constructor(private http:HttpClient) {
    this.http.get('https://dog.ceo/api/breeds/image/random').subscribe((data) => {
      this.images.push({message: data['message']});
    }, (err) => {
        console.log(err);
      })
      
  }

  


}

