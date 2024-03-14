import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdministrarReportesNormativasComponent } from './administrar-reportes-normativas.component';

describe('AdministrarReportesNormativasComponent', () => {
  let component: AdministrarReportesNormativasComponent;
  let fixture: ComponentFixture<AdministrarReportesNormativasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdministrarReportesNormativasComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AdministrarReportesNormativasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
