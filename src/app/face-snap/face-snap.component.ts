import { Component, OnInit, Input } from '@angular/core';
import {FaceSnap} from "../models/face-snap.model";

@Component({
  selector: 'app-face-snap',
  templateUrl: './face-snap.component.html',
  styleUrl: './face-snap.component.scss'
})
export class FaceSnapComponent implements OnInit {
  @Input() faceSnap!: FaceSnap;

  title!: string;
  description!: string;
  createdDate!: Date;
  snaps!: number;
  imageUrl!: string;
  buttonText!: string;

  ngOnInit() {
    this.buttonText = "Oh Snap!";
  }

   /////////////
  // METHODS //
 /////////////

  onSnap() {
    if (this.buttonText == "Oh Snap!") {
      this.faceSnap.snaps++;
      this.buttonText = "Oups Snap!";
    } else if (this.buttonText == "Oups Snap!"){
      this.faceSnap.snaps--;
      this.buttonText = "Oh Snap!";
    }
  }

}
