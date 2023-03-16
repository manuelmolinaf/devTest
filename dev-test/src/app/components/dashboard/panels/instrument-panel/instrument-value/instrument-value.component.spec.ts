import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InstrumentValueComponent } from './instrument-value.component';

describe('InstrumentValueComponent', () => {
  let component: InstrumentValueComponent;
  let fixture: ComponentFixture<InstrumentValueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InstrumentValueComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InstrumentValueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
