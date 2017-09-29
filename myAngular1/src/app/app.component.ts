import { Component, OnInit } from '@angular/core';
import { Item } from './item';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  collection: Item[];


  ngOnInit(): void {

    this.collection = [
      {name: 'Michel', reference: '240', state: 0 }, // 0 = A livrer
      {name: 'Michel', reference: '240', state: 1 }, // 1 = En cours de livraison
      {name: 'Michel', reference: '240', state: 2 } // 2 = Livré
    ];
  }
}
