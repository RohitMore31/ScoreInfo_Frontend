import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PointtableComponent } from './pointtable.component';

describe('PointtableComponent', () => {
  let component: PointtableComponent;
  let fixture: ComponentFixture<PointtableComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PointtableComponent]
    });
    fixture = TestBed.createComponent(PointtableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
