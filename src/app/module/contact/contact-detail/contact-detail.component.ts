import { Component, OnInit, Input } from '@angular/core';
import { Contact } from 'src/app/model/contact';

@Component({
  selector: 'app-contact-detail',
  templateUrl: './contact-detail.component.html',
  styleUrls: ['./contact-detail.component.sass']
})
export class ContactDetailComponent implements OnInit {
  @Input() contact: Contact;

  constructor() { }

  ngOnInit() {
  }

}
