import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VisualizarFavoritosComponent } from './visualizar-favoritos.component';

describe('VisualizarFavoritosComponent', () => {
  let component: VisualizarFavoritosComponent;
  let fixture: ComponentFixture<VisualizarFavoritosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VisualizarFavoritosComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(VisualizarFavoritosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
