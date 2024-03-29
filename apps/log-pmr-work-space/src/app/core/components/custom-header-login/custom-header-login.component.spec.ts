import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CustomHeaderLoginComponent } from './custom-header-login.component';

describe('CustomHeaderLoginComponent', () => {
  let component: CustomHeaderLoginComponent;
  let fixture: ComponentFixture<CustomHeaderLoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CustomHeaderLoginComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CustomHeaderLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
