import { Component } from '@angular/core';
import {userData, UserDataInterface} from "./userData";

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent {

  userData:UserDataInterface = userData

}
