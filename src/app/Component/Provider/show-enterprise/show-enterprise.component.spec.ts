import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowEnterpriseComponent } from './show-enterprise.component';

describe('ShowEnterpriseComponent', () => {
  let component: ShowEnterpriseComponent;
  let fixture: ComponentFixture<ShowEnterpriseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowEnterpriseComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShowEnterpriseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
