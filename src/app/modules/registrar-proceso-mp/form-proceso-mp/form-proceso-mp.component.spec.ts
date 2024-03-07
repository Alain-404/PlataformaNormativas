import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormProcesoMpComponent } from './form-proceso-mp.component';

describe('FormProcesoMpComponent', () => {
  let component: FormProcesoMpComponent;
  let fixture: ComponentFixture<FormProcesoMpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormProcesoMpComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FormProcesoMpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
