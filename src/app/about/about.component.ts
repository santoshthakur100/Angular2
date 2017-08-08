import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./../../../node_modules/bootstrap/dist/css/bootstrap.css','./about.component.css']
})
export class AboutComponent implements OnInit {

  constructor() {

  }

  ngOnInit() {

  }

  title = 'About Tripify';
  subTitle = "Read more about Tripify"

}
