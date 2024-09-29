import { Component } from '@angular/core';
import { LoaderService } from '../../services/loader.service';
import { Observable } from 'rxjs';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-loader',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './loader.component.html',
  styleUrl: './loader.component.scss'
})
export class LoaderComponent {
  loading$: Observable<boolean>;

  constructor(private loaderService: LoaderService) {
    this.loading$ = this.loaderService.loader$;
  }
}
