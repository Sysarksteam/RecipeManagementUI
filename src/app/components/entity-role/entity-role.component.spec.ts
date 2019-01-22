import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EntityRoleComponent } from './entity-role.component';

describe('EntityRoleComponent', () => {
  let component: EntityRoleComponent;
  let fixture: ComponentFixture<EntityRoleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EntityRoleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EntityRoleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
