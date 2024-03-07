import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListControlUsuariosComponent } from './list-control-usuarios.component';

describe('ListControlUsuariosComponent', () => {
  let component: ListControlUsuariosComponent;
  let fixture: ComponentFixture<ListControlUsuariosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListControlUsuariosComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ListControlUsuariosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
