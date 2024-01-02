import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FirstlySectionHomeComponent } from './firstly-section-home.component';

describe('FirstlySectionHomeComponent', () => {
  let component: FirstlySectionHomeComponent;
  let fixture: ComponentFixture<FirstlySectionHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FirstlySectionHomeComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(FirstlySectionHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
