import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OngoingPollsComponent } from './ongoing-polls.component';

describe('OngoingPollsComponent', () => {
  let component: OngoingPollsComponent;
  let fixture: ComponentFixture<OngoingPollsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OngoingPollsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OngoingPollsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
