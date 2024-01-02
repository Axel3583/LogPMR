import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SixthlySectionHomeComponent } from './sixthly-section-home.component';

describe('SixthlySectionHomeComponent', () => {
  let component: SixthlySectionHomeComponent;
  let fixture: ComponentFixture<SixthlySectionHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SixthlySectionHomeComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(SixthlySectionHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
