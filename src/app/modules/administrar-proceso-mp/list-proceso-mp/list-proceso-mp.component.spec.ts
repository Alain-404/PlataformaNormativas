import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListProcesoMpComponent } from './list-proceso-mp.component';

describe('ListProcesoMpComponent', () => {
  let component: ListProcesoMpComponent;
  let fixture: ComponentFixture<ListProcesoMpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListProcesoMpComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ListProcesoMpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
