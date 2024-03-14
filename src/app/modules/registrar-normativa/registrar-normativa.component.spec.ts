import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrarNormativaComponent } from './registrar-normativa.component';

describe('RegistrarNormativaComponent', () => {
  let component: RegistrarNormativaComponent;
  let fixture: ComponentFixture<RegistrarNormativaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RegistrarNormativaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RegistrarNormativaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
