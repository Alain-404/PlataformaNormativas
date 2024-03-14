import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsrProyectosComponent } from './usr-proyectos.component';

describe('UsrProyectosComponent', () => {
  let component: UsrProyectosComponent;
  let fixture: ComponentFixture<UsrProyectosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UsrProyectosComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UsrProyectosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
