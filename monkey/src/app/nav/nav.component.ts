import { Component, OnInit } from '@angular/core';
import { expandCollapse } from './nav.component.animation';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css'],
  animations: [
    expandCollapse
  ]
})
export class NavComponent implements OnInit {
  isExpanded = true;
  isDropped = false;
  
  toggle(): void {
    this.isExpanded = !this.isExpanded;
  }

  dropDown(): void {
    this.isDropped = !this.isDropped;
  }
  constructor() { 
    
  }
  
  ngOnInit() {
  }

}
