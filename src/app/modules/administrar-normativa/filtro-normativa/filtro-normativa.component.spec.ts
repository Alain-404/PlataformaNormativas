import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FiltroNormativaComponent } from './filtro-normativa.component';

describe('FiltroNormativaComponent', () => {
  let component: FiltroNormativaComponent;
  let fixture: ComponentFixture<FiltroNormativaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FiltroNormativaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FiltroNormativaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
