import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ThirdlySectionHomeComponent } from './thirdly-section-home.component';

describe('ThirdlySectionHomeComponent', () => {
  let component: ThirdlySectionHomeComponent;
  let fixture: ComponentFixture<ThirdlySectionHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ThirdlySectionHomeComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ThirdlySectionHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
