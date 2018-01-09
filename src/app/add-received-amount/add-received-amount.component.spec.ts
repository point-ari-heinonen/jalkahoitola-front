import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddReceivedAmountComponent } from './add-received-amount.component';

describe('AddReceivedAmountComponent', () => {
  let component: AddReceivedAmountComponent;
  let fixture: ComponentFixture<AddReceivedAmountComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddReceivedAmountComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddReceivedAmountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
