import { Component, ViewChild, ElementRef, OnInit } from '@angular/core';
import { expandCollapse } from './nav.component.animation';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css'],
  animations: [
    expandCollapse
  ]
})
export class NavComponent {
  @ViewChild('navbarToggler') navbarToggler:ElementRef;
  public navbarCollapsed = true;
  isDropped = false;
  isExpanded = false;
  
  toggle(): void {
    this.isExpanded = !this.isExpanded;
  }

  toggleHome() : void {
    if (this.isExpanded) {
      this.isExpanded = false;
    }
  }

  navBarTogglerIsVisible() {
    return this.navbarToggler.nativeElement.offsetParent !== null;
  }

  collapseNav() {
    if (this.navBarTogglerIsVisible()) {
      this.navbarToggler.nativeElement.click();
    }
  }
}
