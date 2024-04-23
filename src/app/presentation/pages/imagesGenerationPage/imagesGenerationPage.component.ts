import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-images-generation-page',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './imagesGenerationPage.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class ImagesGenerationPageComponent { }
