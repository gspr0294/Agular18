import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PolicyQuoteFormComponent } from './policy-quote-form.component';

describe('PolicyQuoteFormComponent', () => {
  let component: PolicyQuoteFormComponent;
  let fixture: ComponentFixture<PolicyQuoteFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PolicyQuoteFormComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PolicyQuoteFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
