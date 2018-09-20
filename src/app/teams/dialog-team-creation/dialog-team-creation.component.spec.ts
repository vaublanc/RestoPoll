import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogTeamCreationComponent } from './dialog-team-creation.component';

describe('DialogTeamCreationComponent', () => {
  let component: DialogTeamCreationComponent;
  let fixture: ComponentFixture<DialogTeamCreationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DialogTeamCreationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogTeamCreationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
