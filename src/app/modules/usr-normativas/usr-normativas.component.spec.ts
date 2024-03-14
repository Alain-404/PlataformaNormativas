import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsrNormativasComponent } from './usr-normativas.component';

describe('UsrNormativasComponent', () => {
  let component: UsrNormativasComponent;
  let fixture: ComponentFixture<UsrNormativasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UsrNormativasComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UsrNormativasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
