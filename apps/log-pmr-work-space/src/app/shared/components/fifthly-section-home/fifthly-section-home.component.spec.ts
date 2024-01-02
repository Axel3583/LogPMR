import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FifthlySectionHomeComponent } from './fifthly-section-home.component';

describe('FifthlySectionHomeComponent', () => {
  let component: FifthlySectionHomeComponent;
  let fixture: ComponentFixture<FifthlySectionHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FifthlySectionHomeComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(FifthlySectionHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
