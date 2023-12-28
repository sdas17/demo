import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParentParentComponent } from './parent-parent.component';

describe('ParentParentComponent', () => {
  let component: ParentParentComponent;
  let fixture: ComponentFixture<ParentParentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ParentParentComponent]
    });
    fixture = TestBed.createComponent(ParentParentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
