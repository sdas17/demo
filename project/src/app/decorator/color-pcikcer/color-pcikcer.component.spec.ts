import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ColorPcikcerComponent } from './color-pcikcer.component';

describe('ColorPcikcerComponent', () => {
  let component: ColorPcikcerComponent;
  let fixture: ComponentFixture<ColorPcikcerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ColorPcikcerComponent]
    });
    fixture = TestBed.createComponent(ColorPcikcerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
