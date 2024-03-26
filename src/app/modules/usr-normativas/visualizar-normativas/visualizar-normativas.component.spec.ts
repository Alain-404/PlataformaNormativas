import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VisualizarNormativasComponent } from './visualizar-normativas.component';

describe('VisualizarNormativasComponent', () => {
  let component: VisualizarNormativasComponent;
  let fixture: ComponentFixture<VisualizarNormativasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VisualizarNormativasComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(VisualizarNormativasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
