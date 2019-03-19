import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ContactComponent } from './contact/contact.component';
import { ContactDetailComponent } from './contact-detail/contact-detail.component';
import { ContactEditComponent } from './contact-edit/contact-edit.component';

const routes: Routes = [
  {
    path: 'contact/lists',
    component: ContactComponent
  },
  {
    path: 'contact/edit/:id',
    component: ContactEditComponent
  }
];

@NgModule({
  declarations: [
    ContactComponent, 
    ContactDetailComponent, 
    ContactEditComponent
  ],
  imports: [
    CommonModule,
    FontAwesomeModule,
    FormsModule, 
    ReactiveFormsModule,
    RouterModule.forRoot(routes,{onSameUrlNavigation: 'reload'})
  ],
  exports: [
    RouterModule
  ]
})
export class ContactModule { }
