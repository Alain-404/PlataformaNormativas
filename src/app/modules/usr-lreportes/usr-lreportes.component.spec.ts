import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsrLreportesComponent } from './usr-lreportes.component';

describe('UsrLreportesComponent', () => {
  let component: UsrLreportesComponent;
  let fixture: ComponentFixture<UsrLreportesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UsrLreportesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UsrLreportesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
