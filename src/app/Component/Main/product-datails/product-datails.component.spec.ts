import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductDatailsComponent } from './product-datails.component';

describe('ProductDatailsComponent', () => {
  let component: ProductDatailsComponent;
  let fixture: ComponentFixture<ProductDatailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProductDatailsComponent]
    });
    fixture = TestBed.createComponent(ProductDatailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
