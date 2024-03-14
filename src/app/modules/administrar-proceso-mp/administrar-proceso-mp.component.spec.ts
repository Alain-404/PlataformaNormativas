import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdministrarProcesoMpComponent } from './administrar-proceso-mp.component';

describe('AdministrarProcesoMpComponent', () => {
  let component: AdministrarProcesoMpComponent;
  let fixture: ComponentFixture<AdministrarProcesoMpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdministrarProcesoMpComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AdministrarProcesoMpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
