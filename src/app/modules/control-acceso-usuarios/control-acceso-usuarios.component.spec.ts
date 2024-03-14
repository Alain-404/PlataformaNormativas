import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ControlAccesoUsuariosComponent } from './control-acceso-usuarios.component';

describe('ControlAccesoUsuariosComponent', () => {
  let component: ControlAccesoUsuariosComponent;
  let fixture: ComponentFixture<ControlAccesoUsuariosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ControlAccesoUsuariosComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ControlAccesoUsuariosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
