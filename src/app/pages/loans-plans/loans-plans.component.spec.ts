import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoansPlansComponent } from './loans-plans.component';

describe('LoansPlansComponent', () => {
  let component: LoansPlansComponent;
  let fixture: ComponentFixture<LoansPlansComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LoansPlansComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoansPlansComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
