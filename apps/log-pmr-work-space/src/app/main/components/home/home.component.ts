import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from 'src/app/core/components/footer/footer.component';
import { FifthlySectionHomeComponent } from 'src/app/shared/components/fifthly-section-home/fifthly-section-home.component';
import { FirstlySectionHomeComponent } from 'src/app/shared/components/firstly-section-home/firstly-section-home.component';
import { FourthlySectionHomeComponent } from 'src/app/shared/components/fourthly-section-home/fourthly-section-home.component';
import { SecondlySectionHomeComponent } from 'src/app/shared/components/secondly-section-home/secondly-section-home.component';
import { SixthlySectionHomeComponent } from 'src/app/shared/components/sixthly-section-home/sixthly-section-home.component';
import { ThirdlySectionHomeComponent } from 'src/app/shared/components/thirdly-section-home/thirdly-section-home.component';



@Component({
  selector: 'logpmr-home',
  standalone: true,
  imports: [
    CommonModule, FirstlySectionHomeComponent, 
    SecondlySectionHomeComponent, ThirdlySectionHomeComponent,
    FourthlySectionHomeComponent, FifthlySectionHomeComponent,
    SixthlySectionHomeComponent, FooterComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {}
