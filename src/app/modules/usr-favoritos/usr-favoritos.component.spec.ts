import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsrFavoritosComponent } from './usr-favoritos.component';

describe('UsrFavoritosComponent', () => {
  let component: UsrFavoritosComponent;
  let fixture: ComponentFixture<UsrFavoritosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UsrFavoritosComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UsrFavoritosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
