import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportesNormativasComponent } from './reportes-normativas.component';

describe('ReportesNormativasComponent', () => {
  let component: ReportesNormativasComponent;
  let fixture: ComponentFixture<ReportesNormativasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReportesNormativasComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ReportesNormativasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
