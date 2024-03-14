import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListNormativasComponent } from './list-normativas.component';

describe('ListNormativasComponent', () => {
  let component: ListNormativasComponent;
  let fixture: ComponentFixture<ListNormativasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListNormativasComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ListNormativasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
