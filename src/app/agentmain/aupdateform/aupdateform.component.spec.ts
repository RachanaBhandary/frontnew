import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AupdateformComponent } from './aupdateform.component';

describe('AupdateformComponent', () => {
  let component: AupdateformComponent;
  let fixture: ComponentFixture<AupdateformComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AupdateformComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AupdateformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
