import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoggedHomepageComponent } from './logged-homepage.component';

describe('LoggedHomepageComponent', () => {
  let component: LoggedHomepageComponent;
  let fixture: ComponentFixture<LoggedHomepageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoggedHomepageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoggedHomepageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
