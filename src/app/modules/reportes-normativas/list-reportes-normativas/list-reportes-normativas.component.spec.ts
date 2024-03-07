import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListReportesNormativasComponent } from './list-reportes-normativas.component';

describe('ListReportesNormativasComponent', () => {
  let component: ListReportesNormativasComponent;
  let fixture: ComponentFixture<ListReportesNormativasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListReportesNormativasComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ListReportesNormativasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
