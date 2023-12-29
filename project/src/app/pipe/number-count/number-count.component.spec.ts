import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NumberCountComponent } from './number-count.component';

describe('NumberCountComponent', () => {
  let component: NumberCountComponent;
  let fixture: ComponentFixture<NumberCountComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NumberCountComponent]
    });
    fixture = TestBed.createComponent(NumberCountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
