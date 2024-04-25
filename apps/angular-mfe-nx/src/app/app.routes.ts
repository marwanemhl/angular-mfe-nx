import { Route } from '@angular/router';

export const appRoutes: Route[] = [
  {
    path: 'section-b',
    loadChildren: () =>
      import('remote-section-b/Routes').then((m) => m.remoteRoutes),
  },{
    path: 'section-c',
    loadChildren: () =>
      import('remote-section-c/Routes').then((m) => m.remoteRoutes),
  }
];
