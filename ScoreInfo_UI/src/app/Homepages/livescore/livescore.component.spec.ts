import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LivescoreComponent } from './livescore.component';

describe('LivescoreComponent', () => {
  let component: LivescoreComponent;
  let fixture: ComponentFixture<LivescoreComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LivescoreComponent]
    });
    fixture = TestBed.createComponent(LivescoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
