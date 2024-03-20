import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VisualizarGuiasComponent } from './visualizar-guias.component';

describe('VisualizarGuiasComponent', () => {
  let component: VisualizarGuiasComponent;
  let fixture: ComponentFixture<VisualizarGuiasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VisualizarGuiasComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(VisualizarGuiasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
