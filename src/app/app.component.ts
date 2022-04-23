import { Component } from '@angular/core';
import { ContactComponent } from './contact/contact.component';
import { MdbModalRef, MdbModalService } from 'mdb-angular-ui-kit';

import { CartComponent } from './cart/cart.component';



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
  

}
