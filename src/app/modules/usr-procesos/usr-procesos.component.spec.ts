import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsrProcesosComponent } from './usr-procesos.component';

describe('UsrProcesosComponent', () => {
  let component: UsrProcesosComponent;
  let fixture: ComponentFixture<UsrProcesosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UsrProcesosComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UsrProcesosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
