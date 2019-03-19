import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl, FormArray } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

import { Contact } from '../../../model/contact';
import { ContactData } from '../../../data/contact';

@Component({
  selector: 'app-contact-edit',
  templateUrl: './contact-edit.component.html',
  styleUrls: ['./contact-edit.component.sass']
})
export class ContactEditComponent implements OnInit {
  public contacts: Contact[] = ContactData;
  private selectedCtc = (this.route.snapshot.paramMap.get("id") !== '0')? this.route.snapshot.paramMap.get("id") : null;
  ctcForm: FormGroup;
  error: string = '';

  constructor(
    public formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    if(this.selectedCtc !== null){
      let ctc = this.contacts.find( (el) => {
        if(el.id === this.selectedCtc){ return true; }
      });
      //console.log(ctc);
      this.ctcForm = this.formBuilder.group({
        'firstname': [ctc.firstname, Validators.required],
        'lastname': [ctc.lastname, Validators.required],
        'adresse': [ctc.adresse, Validators.required],
        'email': [ctc.email, [Validators.required, Validators.email]],
        'phone': [ctc.phone, Validators.required],
        'birthday': [ctc.birthday]
      });

    } else {
      this.ctcForm = this.formBuilder.group({
        'firstname': ['', Validators.required],
        'lastname': ['', Validators.required],
        'adresse': ['', Validators.required],
        'email': ['', Validators.required],
        'phone': ['', Validators.required],
        'birthday': ['']
      });
    }

  }

  onSubmit() {
    console.log(this.ctcForm.value);
    this.error = "save : " + this.ctcForm.value.firstname + " " + this.ctcForm.value.lastname + " ";
  }

}
