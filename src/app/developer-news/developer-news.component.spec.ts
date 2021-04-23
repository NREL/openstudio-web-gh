import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeveloperNewsComponent } from './developer-news.component';

describe('DeveloperNewsComponent', () => {
  let component: DeveloperNewsComponent;
  let fixture: ComponentFixture<DeveloperNewsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeveloperNewsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeveloperNewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
