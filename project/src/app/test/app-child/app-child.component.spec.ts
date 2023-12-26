import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppChildComponent } from './app-child.component';

describe('AppChildComponent', () => {
  let component: AppChildComponent;
  let fixture: ComponentFixture<AppChildComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AppChildComponent]
    });
    fixture = TestBed.createComponent(AppChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
