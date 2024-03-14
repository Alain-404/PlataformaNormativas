import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsrGuiasComponent } from './usr-guias.component';

describe('UsrGuiasComponent', () => {
  let component: UsrGuiasComponent;
  let fixture: ComponentFixture<UsrGuiasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UsrGuiasComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UsrGuiasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
