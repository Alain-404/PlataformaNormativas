import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditNormativaComponent } from './edit-normativa.component';

describe('EditNormativaComponent', () => {
  let component: EditNormativaComponent;
  let fixture: ComponentFixture<EditNormativaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EditNormativaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EditNormativaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
