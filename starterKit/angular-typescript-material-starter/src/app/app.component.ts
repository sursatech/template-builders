import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatChipsModule } from '@angular/material/chips';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    MatToolbarModule,
    MatButtonModule,
    MatCardModule,
    MatIconModule,
    MatChipsModule
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Angular + TypeScript + Material Design';
  
  features = [
    { 
      icon: 'widgets',
      name: 'Angular 17', 
      description: 'Latest Angular with standalone components',
      color: 'primary'
    },
    { 
      icon: 'code',
      name: 'TypeScript', 
      description: 'Type-safe development experience',
      color: 'accent'
    },
    { 
      icon: 'palette',
      name: 'Material Design', 
      description: 'Beautiful Material UI components',
      color: 'primary'
    },
    { 
      icon: 'navigation',
      name: 'Routing', 
      description: 'Angular Router configured',
      color: 'accent'
    },
    { 
      icon: 'devices',
      name: 'Responsive', 
      description: 'Mobile-first responsive design',
      color: 'primary'
    },
    { 
      icon: 'dark_mode',
      name: 'Theming', 
      description: 'Customizable Material themes',
      color: 'accent'
    }
  ];

  componentExamples = [
    'Buttons', 'Cards', 'Forms', 'Tables', 'Dialogs',
    'Menus', 'Icons', 'Toolbars', 'Sidenav', 'Tabs'
  ];
}

