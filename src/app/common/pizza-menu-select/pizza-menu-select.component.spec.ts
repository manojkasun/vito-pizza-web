import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PizzaMenuSelectComponent } from './pizza-menu-select.component';

describe('PizzaMenuSelectComponent', () => {
  let component: PizzaMenuSelectComponent;
  let fixture: ComponentFixture<PizzaMenuSelectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PizzaMenuSelectComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PizzaMenuSelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
