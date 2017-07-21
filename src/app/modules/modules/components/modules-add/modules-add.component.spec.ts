import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModulesAddComponent } from './modules-add.component';

describe('ModulesAddComponent', () => {
  let component: ModulesAddComponent;
  let fixture: ComponentFixture<ModulesAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModulesAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModulesAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
