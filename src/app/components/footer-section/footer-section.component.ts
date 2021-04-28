import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer-section',
  templateUrl: './footer-section.component.html',
  styleUrls: ['./footer-section.component.scss']
})
export class FooterSectionComponent implements OnInit {

  testimonials: Array<any>;
  date:any;

  constructor() { }

  ngOnInit() {
  this.testimonials= [
    {
      head: "It surpassed our expectations",
      body: "Filed has completely surpassed our expectations. I will refer everyone I know. Filed is worth much more than I paid.",
      author: "Tania Y.",
      role: "Flexi Content @Hello"
    },
    {
      head: "It surpassed our expectations",
      body: "Filed has completely surpassed our expectations. I will refer everyone I know. Filed is worth much more than I paid.",
      author: "Tania Y.",
      role: "Flexi Content @Hello"
    },
    {
      head: "It surpassed our expectations",
      body: "Filed has completely surpassed our expectations. I will refer everyone I know. Filed is worth much more than I paid.",
      author: "Tania Y.",
      role: "Flexi Content @Hello"
    },
  ];

  this.date = new Date().getFullYear()
  }

}
