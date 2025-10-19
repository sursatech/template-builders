# Angular + TypeScript + Material Design Starter

Angular 17 starter with TypeScript and Angular Material Design components.

## Quick Start

```bash
npm install && npm start
# or
bun install && bun start
# or
yarn install && yarn start
# or
pnpm install && pnpm start
```

Visit [http://localhost:4200](http://localhost:4200)

## Features

- 🅰️ Angular 17 (Standalone Components)
- 🔷 TypeScript
- 🎨 Angular Material (40+ components)
- 🚀 Angular CLI
- 🌙 Dark Mode Support
- 💅 Material Theming

## Scripts

```bash
npm start        # Start dev server
npm run build    # Build for production
npm test         # Run tests
npm run lint     # Run linting
```

## Material Components

Import what you need:
```typescript
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';
```

Browse all: [material.angular.io](https://material.angular.io/components/categories)

## Generate with Material Schematics

```bash
ng generate @angular/material:navigation nav
ng generate @angular/material:dashboard dashboard
ng generate @angular/material:table data-table
```

## Customize Theme

Edit `src/styles.scss`:
```scss
$my-primary: mat.define-palette(mat.$indigo-palette);
$my-accent: mat.define-palette(mat.$pink-palette);
```

---

**Happy Coding!** 🎉
