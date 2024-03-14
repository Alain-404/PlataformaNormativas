import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdministrarVideoComponent } from './administrar-video.component';

describe('AdministrarVideoComponent', () => {
  let component: AdministrarVideoComponent;
  let fixture: ComponentFixture<AdministrarVideoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdministrarVideoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AdministrarVideoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
