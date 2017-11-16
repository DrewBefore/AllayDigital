import { TeamService } from './team.service';
import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.css']
})
export class TeamComponent implements OnInit {
  team: object;

  constructor(service: TeamService) {
    this.team = service.getTeam();
    console.log(this.team[0].name);
}

ngOnInit(){

};

}
