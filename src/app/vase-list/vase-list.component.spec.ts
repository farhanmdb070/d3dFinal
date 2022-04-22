import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VaseListComponent } from './vase-list.component';

describe('VaseListComponent', () => {
  let component: VaseListComponent;
  let fixture: ComponentFixture<VaseListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VaseListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VaseListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
