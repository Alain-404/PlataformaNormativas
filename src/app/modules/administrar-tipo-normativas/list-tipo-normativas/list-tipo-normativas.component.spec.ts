import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListTipoNormativasComponent } from './list-tipo-normativas.component';

describe('ListTipoNormativasComponent', () => {
  let component: ListTipoNormativasComponent;
  let fixture: ComponentFixture<ListTipoNormativasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListTipoNormativasComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ListTipoNormativasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
