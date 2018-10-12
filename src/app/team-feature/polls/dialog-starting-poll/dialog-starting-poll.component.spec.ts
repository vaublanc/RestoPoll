import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogStartingPollComponent } from './dialog-starting-poll.component';

describe('DialogStartingPollComponent', () => {
  let component: DialogStartingPollComponent;
  let fixture: ComponentFixture<DialogStartingPollComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DialogStartingPollComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogStartingPollComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
