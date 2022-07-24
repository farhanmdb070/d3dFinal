import { Component } from '@angular/core';
import { ContactComponent } from './contact/contact.component';
import { MdbModalRef, MdbModalService } from 'mdb-angular-ui-kit';

import { CartComponent } from './cart/cart.component';

export interface Section {
  name: string;
  updated: Date;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {

  modalRef: MdbModalRef<ContactComponent> | null = null;
  modalRefCart: MdbModalRef<CartComponent> | null = null;

  config = {
    animation: true,
    backdrop: true,
    containerClass: 'right',
    data: {
      title: 'Custom title'
    },
    ignoreBackdropClick: false,
    keyboard: true,
    modalClass: 'modal-top-right'
  }

  constructor(private modalService: MdbModalService) {}

  openModal() {
    this.modalRef = this.modalService.open(ContactComponent, this.config);
  }

  openModalCart() {
    this.modalRefCart = this.modalService.open(CartComponent, this.config);
  }
  folders: Section[] = [
    {
      name: 'Photos',
      updated: new Date('1/1/16'),
    },
    {
      name: 'Recipes',
      updated: new Date('1/17/16'),
    },
    {
      name: 'Work',
      updated: new Date('1/28/16'),
    },
  ];
  notes: Section[] = [
    {
      name: 'Vacation Itinerary',
      updated: new Date('2/20/16'),
    },
    {
      name: 'Kitchen Remodel',
      updated: new Date('1/18/16'),
    },
  ];


  

}
