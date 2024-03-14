import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdministrarNormativaComponent } from './administrar-normativa.component';

describe('AdministrarNormativaComponent', () => {
  let component: AdministrarNormativaComponent;
  let fixture: ComponentFixture<AdministrarNormativaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdministrarNormativaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AdministrarNormativaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
