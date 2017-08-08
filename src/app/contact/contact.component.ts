import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./../../../node_modules/bootstrap/dist/css/bootstrap.css','./contact.component.css']
})
export class ContactComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  title = "Contact Section";
  subTitle = "Please send your all Information"

}
