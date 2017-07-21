import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModulesManageComponent } from './modules-manage.component';

describe('ModulesManageComponent', () => {
  let component: ModulesManageComponent;
  let fixture: ComponentFixture<ModulesManageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModulesManageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModulesManageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
