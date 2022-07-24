import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MdbModule } from 'mdb-angular-ui-kit';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './header/header.component';
import { CarouselComponent } from './carousel/carousel.component';
import { FooterComponent } from './footer/footer.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { AppointmentComponent } from './appointment/appointment.component';
import { FeedbackComponent } from './feedback/feedback.component';

import { MdbModalModule } from 'mdb-angular-ui-kit';
import { MdbFormsModule } from 'mdb-angular-ui-kit';
import { CartComponent } from './cart/cart.component';
import {MatTabsModule} from '@angular/material/tabs';
import {MatListModule} from '@angular/material/list';
import {MatDividerModule} from '@angular/material/divider';
import { InventoryButtonComponent } from './inventory-button/inventory-button.component';
import {MatButtonModule} from '@angular/material/button';
import {MatGridListModule} from '@angular/material/grid-list';
import { MainCardComponent } from './main-card/main-card.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CarouselComponent,
    FooterComponent,
    AboutComponent,
    ContactComponent,
    AppointmentComponent,
    FeedbackComponent,
    CartComponent,
    InventoryButtonComponent,
    MainCardComponent    
  ],
  imports: [
    BrowserModule,
    MdbModule,
    BrowserAnimationsModule,
    MdbModalModule,
    MdbFormsModule,
    MatTabsModule,MatListModule,MatDividerModule,MatButtonModule,MatGridListModule  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
