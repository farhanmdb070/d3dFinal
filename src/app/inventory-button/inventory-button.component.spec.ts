import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InventoryButtonComponent } from './inventory-button.component';

describe('InventoryButtonComponent', () => {
  let component: InventoryButtonComponent;
  let fixture: ComponentFixture<InventoryButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InventoryButtonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InventoryButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
