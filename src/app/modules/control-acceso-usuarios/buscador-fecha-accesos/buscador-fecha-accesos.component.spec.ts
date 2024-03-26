import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuscadorFechaAccesosComponent } from './buscador-fecha-accesos.component';

describe('BuscadorFechaAccesosComponent', () => {
  let component: BuscadorFechaAccesosComponent;
  let fixture: ComponentFixture<BuscadorFechaAccesosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BuscadorFechaAccesosComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BuscadorFechaAccesosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
