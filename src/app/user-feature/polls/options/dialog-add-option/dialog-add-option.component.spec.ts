import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogAddOptionComponent } from './dialog-add-option.component';

describe('DialogAddOptionComponent', () => {
  let component: DialogAddOptionComponent;
  let fixture: ComponentFixture<DialogAddOptionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DialogAddOptionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogAddOptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
