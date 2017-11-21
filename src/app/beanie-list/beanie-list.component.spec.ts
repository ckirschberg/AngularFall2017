import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BeanieListComponent } from './beanie-list.component';

describe('BeanieListComponent', () => {
  let component: BeanieListComponent;
  let fixture: ComponentFixture<BeanieListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BeanieListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BeanieListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
