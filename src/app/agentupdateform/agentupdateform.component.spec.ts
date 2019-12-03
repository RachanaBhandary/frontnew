import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AgentupdateformComponent } from './agentupdateform.component';

describe('AgentupdateformComponent', () => {
  let component: AgentupdateformComponent;
  let fixture: ComponentFixture<AgentupdateformComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AgentupdateformComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AgentupdateformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
