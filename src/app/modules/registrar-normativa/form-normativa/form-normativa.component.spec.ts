import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormNormativaComponent } from './form-normativa.component';

describe('FormNormativaComponent', () => {
  let component: FormNormativaComponent;
  let fixture: ComponentFixture<FormNormativaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormNormativaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FormNormativaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
