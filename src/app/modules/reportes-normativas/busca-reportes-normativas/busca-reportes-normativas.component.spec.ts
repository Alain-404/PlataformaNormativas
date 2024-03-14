import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuscaReportesNormativasComponent } from './busca-reportes-normativas.component';

describe('BuscaReportesNormativasComponent', () => {
  let component: BuscaReportesNormativasComponent;
  let fixture: ComponentFixture<BuscaReportesNormativasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BuscaReportesNormativasComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BuscaReportesNormativasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
