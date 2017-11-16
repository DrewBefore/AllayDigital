import { Injectable } from '@angular/core';

@Injectable()
export class TeamService {
  team: { name: string, title: string, img: string, bio: Array<string> }[] = [
    { 
    name: "Greg Jones", 
    title: "Coach", 
    img: "https://d3ciwvs59ifrt8.cloudfront.net/b3bf9947-0261-4490-84d4-172a0f33ee44/348c8f4f-f0ae-4caa-a31b-4ada72bc6813.jpg", 
    bio: [
      "B.Sc. Physical Education & Nutritional Health EOU 2008",
      "Certified Natural Trainer(CNT 1) Monkey Bar Gym", 
      "Nautilus Institute Accredited Coach",
      "Three Sport Collegiate Athlete/National All Star in Football",
      "Brazilian Jiu-Jitsu Competitor/Natural Bodybuilding Heavyweight Champion",
      "NPC Double Nationally Qualified Nationals Classic Physique and Masters Bodybuilding competitor 2016-2017",
      "Nov 5th 2016 Idaho Cup Champion Classic Physique and Master Bodybuilding Champion, 2012 Vancouver Natural Heavyweight Masters Champion"
    ]},
    { 
    name: "Rodrigo Lopes", 
    title: "Head Instructor", 
    img: "https://d3ciwvs59ifrt8.cloudfront.net/b3bf9947-0261-4490-84d4-172a0f33ee44/348c8f4f-f0ae-4caa-a31b-4ada72bc6813.jpg", 
    bio: [
      "3rd Degree black belt under professor Marcio Feitosa and master Carlos Gracie Jr.",
      "Certified black belt under Gracie Barra", 
      "Founding member of the Gracie Barra Seattle and Gracie Barra Northwest",
      "His leadership has grown the organization to noe of the largest in Washington",
      "Excellent professional instruction in a safe environment that is accessible for all levels"
    ]},
    { 
    name: 'Daniel Eng "CoachDyanamo"', 
    title: "Head MMA Boxing, Kickboxing/Muay Thai Instructor", 
    img: "https://d3ciwvs59ifrt8.cloudfront.net/b3bf9947-0261-4490-84d4-172a0f33ee44/348c8f4f-f0ae-4caa-a31b-4ada72bc6813.jpg", 
    bio: [
      "If your interested in scheduling a free orientation with Coach Dynamo, please email info@mbgnw.com",
    ]},
    { 
    name: "Rodrigo Lopes", 
    title: "Head Instructor", 
    img: "https://d3ciwvs59ifrt8.cloudfront.net/b3bf9947-0261-4490-84d4-172a0f33ee44/348c8f4f-f0ae-4caa-a31b-4ada72bc6813.jpg", 
    bio: [
      "3rd Degree black belt under professor Marcio Feitosa and master Carlos Gracie Jr.",
      "Certified black belt under Gracie Barra", 
      "Founding member of the Gracie Barra Seattle and Gracie Barra Northwest",
      "His leadership has grown the organization to noe of the largest in Washington",
      "Excellent professional instruction in a safe environment that is accessible for all levels"
    ]},

  ];
  constructor() { }

  getTeam(){
    return this.team;
  }


}
