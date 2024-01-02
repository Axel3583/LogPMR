import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FourthlySectionHomeComponent } from './fourthly-section-home.component';

describe('FourthlySectionHomeComponent', () => {
  let component: FourthlySectionHomeComponent;
  let fixture: ComponentFixture<FourthlySectionHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FourthlySectionHomeComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(FourthlySectionHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
