import { Injectable } from '@angular/core';

@Injectable()
export class TeamService {
  team: { name: string, title: string, img: string, bio: Array<string> }[] = [
    { 
    name: "Greg Jones", 
    title: "Head Strength and Conditioning Specialist", 
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
    img: "http://www.4teepropertyinvest.com/wp-content/uploads/2014/11/user-placeholder.jpg", 
    bio: [
      "3rd Degree black belt under professor Marcio Feitosa and master Carlos Gracie Jr.",
      "Certified black belt under Gracie Barra", 
      "Founding member of the Gracie Barra Seattle and Gracie Barra Northwest",
      "His leadership has grown the organization to noe of the largest in Washington",
      "Excellent professional instruction in a safe environment that is accessible for all levels"
    ]},
    { 
    name: "Carlos Sievert", 
    title: "Coach", 
    img: "http://www.4teepropertyinvest.com/wp-content/uploads/2014/11/user-placeholder.jpg", 
    bio: [
      "2nd Degree Black Belt under Professor Marcio Feitosa and Master Carlos Gracie Jr.",
      "Actively competing under the Gracie Barra banner regionally and and on the world stage", 
      "Recently placed 3rd in the 2014 Master World Championships in a bracket full of amazing competitors",
      "Professor Carlos is one of the best competitors and instructors in the Northwest"
    ]},
    { 
    name: "Dex Montenegro", 
    title: "Professional Mixed Martial Artist, Professional Boxer & Brazilian Jiu-Jitsu Competitor", 
    img: "https://d3ciwvs59ifrt8.cloudfront.net/014cf302-bcd5-408b-812d-a1d019de896f/cbd63548-3461-43b0-9e41-92bfe2b36213.jpg", 
    bio: [
      "Professional Mixed Martial Artist",
      "Professional Boxer & Brazilian Jiu-Jitsu competitor",
      "He is originally from Lahaina, Hawaii but currently resides in Issaquah, WA",
      "He competes in the 135lbs, 145lbs & 155lbs divisions",
      "Dex has won a gold medals at the Revolution Submission Wrestling tournament and the Gracie Barra NW in-house tournament",
      "Dex was also two-time Golden Gloves competitor with an Amateur boxing record of 25-5",
      "He held held three Amateur MMA Titles at 155lbs & 145lbs",
      "He's the current Professional MMA 135lb Hawaii State Champion",
      "Dex is also married to InvictaFC/UFC fighter Amy Montenegro",
      "They teach kids and adults kickboxing class in Bellevue and Seattle",
      "Their daughters are also active in the WA BJJ & USA Wrestling circuit Dex is one of the main subjects of the documentary Fight Fam"
    ]},
    { 
    name: "Amy Montenegro", 
    title: "Nurse / Muay Thai And Pro MMA Fighter", 
    img: "http://www.4teepropertyinvest.com/wp-content/uploads/2014/11/user-placeholder.jpg", 
    bio: [
      "A full-time nurse as well as a Muay Thai and Pro MMA fighter with a record of 7-2",
      "Competes in Brazilian Jiu Jitsu where she has earned two gold medals from The Revolution BJJ Tournament",
      "Third gold medal from the Seattle IBJJF Open.", 
      "Amy is currently a signed fighter with Invicta Fighting Championships where she competes at 115lbs",
      "No-Gi 2016 World Championships Silver Medalist",
      "Program Director of Monkey Bar Gym/Gracie Barra Bellevue and CNT1 Certified Natural Trainer Monkey Bar Gym",    
      'Amy "The Resurrection" is also married to, teammate and pro MMA fighter, Dex Montenegro. They are the main subjects of the documentary Fight Fam'
    ]},
    { 
    name: "Corinne Messer", 
    title: "Personal Trainer, CPT", 
    img: "../../assets/corrine.jpg", 
    bio: [
      "Certified Personal Fitness Trainer - National Academy of Sports Medicine",
      "Exercise Science Nutrition Consultant, Precision Nutrition",
      "Weightloss Specialist - Naturopathic Physicians Group",
      "Bootcamp Instructor - Tabata Bootcamp" ,
      "Yoga Instructor - Prana Yoga College (500hr)",
      "Top Ten National ranking climbing competitor, US Climbing Association",
      "Climbing Coach/Instructor/Guide, US Climbing Association" 
    ]},

  ];
  constructor() { }

  getTeam(){
    return this.team;
  }


}
