import { Component, OnInit } from '@angular/core';
import {FaceSnap} from "./models/face-snap.model";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  myFirstSnap!: FaceSnap;
  mySchoolSnap! : FaceSnap;
  myWorkSnap! : FaceSnap;

  ngOnInit() {
    this.myFirstSnap = new FaceSnap(
      'Mouss',
      'Mon petit chat espiègle',
      new Date(),
      3,
      '../../assets/images/mouss.png'
    );

    this.mySchoolSnap = new FaceSnap(
      'L\'IPI',
      'L\'école ou je passe mon diplome',
      new Date(),
      10,
      'https://www.ipi-ecoles.com/wp-content/uploads/2020/09/ipi-lyon-hep-campus.jpg'
    );

    this.myWorkSnap = new FaceSnap(
      'Paredes Orapi',
      'Là où je travail en alternance de dévellopeur',
      new Date(),
      152,
      'https://th.bing.com/th?id=OIF.OURne%2fLBGR1TLzLjoRBhHQ&w=316&h=180&c=7&r=0&o=5&pid=1.7'
    )
  }
}

