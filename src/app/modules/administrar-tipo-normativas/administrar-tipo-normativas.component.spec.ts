import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdministrarTipoNormativasComponent } from './administrar-tipo-normativas.component';

describe('AdministrarTipoNormativasComponent', () => {
  let component: AdministrarTipoNormativasComponent;
  let fixture: ComponentFixture<AdministrarTipoNormativasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdministrarTipoNormativasComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AdministrarTipoNormativasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
