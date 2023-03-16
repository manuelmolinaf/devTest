import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderBookPanelComponent } from './order-book-panel.component';

describe('OrderBookPanelComponent', () => {
  let component: OrderBookPanelComponent;
  let fixture: ComponentFixture<OrderBookPanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrderBookPanelComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OrderBookPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
