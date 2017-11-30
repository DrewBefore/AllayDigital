import { expandCollapse } from './../nav/nav.component.animation';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  animations: [
    expandCollapse
  ]
})
export class HomeComponent implements OnInit {
  showZippy: boolean = false;
  isExpanded: boolean = false;
  moreless: String = "more";

  toggle(){
    this.isExpanded = !this.isExpanded;
    this.showZippy = !this.showZippy;
    if (this.moreless == "more") {
      this.moreless = "less";
    } else {
      this.moreless = "more";
    }
  }
  constructor() { }

  ngOnInit() {
  }

}
