import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListNormativaComponent } from './list-normativa.component';

describe('ListNormativaComponent', () => {
  let component: ListNormativaComponent;
  let fixture: ComponentFixture<ListNormativaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListNormativaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ListNormativaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
