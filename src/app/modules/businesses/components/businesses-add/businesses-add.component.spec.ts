import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BusinessesAddComponent } from './businesses-add.component';

describe('BusinessesAddComponent', () => {
  let component: BusinessesAddComponent;
  let fixture: ComponentFixture<BusinessesAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BusinessesAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BusinessesAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
