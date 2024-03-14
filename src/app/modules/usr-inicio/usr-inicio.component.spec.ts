import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsrInicioComponent } from './usr-inicio.component';

describe('UsrInicioComponent', () => {
  let component: UsrInicioComponent;
  let fixture: ComponentFixture<UsrInicioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UsrInicioComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UsrInicioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
