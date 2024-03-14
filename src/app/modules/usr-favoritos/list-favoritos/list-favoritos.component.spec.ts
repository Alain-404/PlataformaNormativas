import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListFavoritosComponent } from './list-favoritos.component';

describe('ListFavoritosComponent', () => {
  let component: ListFavoritosComponent;
  let fixture: ComponentFixture<ListFavoritosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListFavoritosComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ListFavoritosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
