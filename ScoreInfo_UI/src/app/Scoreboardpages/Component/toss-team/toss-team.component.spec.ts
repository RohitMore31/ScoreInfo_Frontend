import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TossTeamComponent } from './toss-team.component';

describe('TossTeamComponent', () => {
  let component: TossTeamComponent;
  let fixture: ComponentFixture<TossTeamComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TossTeamComponent]
    });
    fixture = TestBed.createComponent(TossTeamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
