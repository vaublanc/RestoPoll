import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogTeamSuppressionComponent } from './dialog-team-suppression.component';

describe('DialogTeamSuppressionComponent', () => {
  let component: DialogTeamSuppressionComponent;
  let fixture: ComponentFixture<DialogTeamSuppressionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DialogTeamSuppressionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogTeamSuppressionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
