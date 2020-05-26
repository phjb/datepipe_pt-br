import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-datepipe',
  templateUrl: './datepipe.component.html',
  styleUrls: ['./datepipe.component.css']
})
export class DatepipeComponent implements OnInit {

  today: Date;
  hoje: Date;

  constructor() { }

  ngOnInit() {
    const now = new Date(Date.now());
    this.today = now;
    this.hoje = now;
  }
}
