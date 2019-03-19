import { Component, OnInit } from '@angular/core';

import { Contact } from '../../../model/contact';
import { ContactData } from '../../../data/contact';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.sass']
})
export class ContactComponent implements OnInit {
  public contacts: Contact[] = ContactData;
  public selectedContact: Contact = this.contacts[0];

  constructor() { }

  ngOnInit() {
  }

  onSelect(contact: Contact) {
    this.selectedContact = contact;
  }

  onDelete(contactIndex: number) {
    this.contacts.splice(contactIndex, 1);
  }

}
