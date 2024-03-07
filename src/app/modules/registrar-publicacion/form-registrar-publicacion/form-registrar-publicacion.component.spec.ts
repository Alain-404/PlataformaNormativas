import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormRegistrarPublicacionComponent } from './form-registrar-publicacion.component';

describe('FormRegistrarPublicacionComponent', () => {
  let component: FormRegistrarPublicacionComponent;
  let fixture: ComponentFixture<FormRegistrarPublicacionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormRegistrarPublicacionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FormRegistrarPublicacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
