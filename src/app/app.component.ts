import { Component } from '@angular/core';
import { ContactComponent } from './contact/contact.component';
import { MdbModalRef, MdbModalService } from 'mdb-angular-ui-kit';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {

  modalRef: MdbModalRef<ContactComponent> | null = null;
  
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

}
