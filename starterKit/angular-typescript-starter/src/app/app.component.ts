import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Angular + TypeScript Starter';
  features = [
    { name: 'Angular 17', description: 'Latest Angular with standalone components' },
    { name: 'TypeScript', description: 'Type-safe development experience' },
    { name: 'Angular CLI', description: 'Official tooling and build system' },
    { name: 'SCSS Support', description: 'Enhanced CSS with Sass' },
    { name: 'Routing', description: 'Angular Router configured and ready' },
    { name: 'RxJS', description: 'Reactive programming library' }
  ];
}

