import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListAdministrarReportesComponent } from './list-administrar-reportes.component';

describe('ListAdministrarReportesComponent', () => {
  let component: ListAdministrarReportesComponent;
  let fixture: ComponentFixture<ListAdministrarReportesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListAdministrarReportesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ListAdministrarReportesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
