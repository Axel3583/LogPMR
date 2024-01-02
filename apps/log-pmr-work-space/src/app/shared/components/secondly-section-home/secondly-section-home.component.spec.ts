import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SecondlySectionHomeComponent } from './secondly-section-home.component';

describe('SecondlySectionHomeComponent', () => {
  let component: SecondlySectionHomeComponent;
  let fixture: ComponentFixture<SecondlySectionHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SecondlySectionHomeComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(SecondlySectionHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
