import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BusinessesManageComponent } from './businesses-manage.component';

describe('BusinessesManageComponent', () => {
  let component: BusinessesManageComponent;
  let fixture: ComponentFixture<BusinessesManageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BusinessesManageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BusinessesManageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
