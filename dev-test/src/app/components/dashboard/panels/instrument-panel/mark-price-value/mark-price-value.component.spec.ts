import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MarkPriceValueComponent } from './mark-price-value.component';

describe('MarkPriceValueComponent', () => {
  let component: MarkPriceValueComponent;
  let fixture: ComponentFixture<MarkPriceValueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MarkPriceValueComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MarkPriceValueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
