import {Component, OnDestroy, ElementRef, ViewChild, OnInit} from '@angular/core';
import {DataSource} from '@angular/cdk/collections';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/startWith';
import 'rxjs/add/observable/merge';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/observable/fromEvent';

@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.css']
})
export class ScheduleComponent implements OnDestroy, OnInit {
  script;
  showButton = true;

  ngOnInit(){
    this.script = document.createElement('script');
    this.script.class = 
    document.body.appendChild(this.script)
    this.script.src = 'https://widgets.healcode.com/javascripts/healcode.js';
  }
  
  ngOnDestroy(){
    this.showButton = false;
  }   

  show(){
    return this.showButton;
  }

  reload(){
    location.reload();
  }

}