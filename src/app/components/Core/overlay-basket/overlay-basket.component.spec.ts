import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OverlayBasketComponent } from './overlay-basket.component';

describe('OverlayBasketComponent', () => {
  let component: OverlayBasketComponent;
  let fixture: ComponentFixture<OverlayBasketComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OverlayBasketComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(OverlayBasketComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
