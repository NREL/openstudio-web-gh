import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContributionPolicyComponent } from './contribution-policy.component';

describe('ContributionPolicyComponent', () => {
  let component: ContributionPolicyComponent;
  let fixture: ComponentFixture<ContributionPolicyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContributionPolicyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContributionPolicyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
