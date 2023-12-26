import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChidDemoComponent } from './chid-demo.component';

describe('ChidDemoComponent', () => {
  let component: ChidDemoComponent;
  let fixture: ComponentFixture<ChidDemoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ChidDemoComponent]
    });
    fixture = TestBed.createComponent(ChidDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
