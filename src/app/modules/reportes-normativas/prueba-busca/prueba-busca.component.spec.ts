import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PruebaBuscaComponent } from './prueba-busca.component';

describe('PruebaBuscaComponent', () => {
  let component: PruebaBuscaComponent;
  let fixture: ComponentFixture<PruebaBuscaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PruebaBuscaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PruebaBuscaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
