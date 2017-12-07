import { Component, OnInit, AfterViewInit, OnDestroy} from '@angular/core';
declare var jQuery: any;

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements AfterViewInit, OnDestroy {
  
  ngAfterViewInit() {
      jQuery(document).ready(function(){ //Photos Gallery
           jQuery(".fancybox").fancybox({
               openEffect: "elastic",
               closeEffect: "none"
           });
       });
    }
    
	ngOnDestroy() {
		jQuery(".fancybox").unbind('click.fb');
		// or maybe jQuery(".fancybox").off() to remove all bindings
	}


}
