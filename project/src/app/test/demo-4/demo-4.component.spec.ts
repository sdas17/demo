import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Demo4Component } from './demo-4.component';

describe('Demo4Component', () => {
  let component: Demo4Component;
  let fixture: ComponentFixture<Demo4Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Demo4Component]
    });
    fixture = TestBed.createComponent(Demo4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
