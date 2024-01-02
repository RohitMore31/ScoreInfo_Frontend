import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FixMatchComponent } from './fix-match.component';

describe('FixMatchComponent', () => {
  let component: FixMatchComponent;
  let fixture: ComponentFixture<FixMatchComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FixMatchComponent]
    });
    fixture = TestBed.createComponent(FixMatchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
