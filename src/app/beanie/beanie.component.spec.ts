import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BeanieComponent } from './beanie.component';

describe('BeanieComponent', () => {
  let component: BeanieComponent;
  let fixture: ComponentFixture<BeanieComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BeanieComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BeanieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
