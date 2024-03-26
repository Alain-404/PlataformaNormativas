import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VisualizarProyectosComponent } from './visualizar-proyectos.component';

describe('VisualizarProyectosComponent', () => {
  let component: VisualizarProyectosComponent;
  let fixture: ComponentFixture<VisualizarProyectosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VisualizarProyectosComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(VisualizarProyectosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
