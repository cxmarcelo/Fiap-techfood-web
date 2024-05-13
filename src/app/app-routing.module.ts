import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'client', loadChildren: () => import('./pages/client/client.module').then((m) => m.ClientModule), },
  { path: 'work', loadChildren: () => import('./pages/work/work.module').then((m) => m.WorkModule), },

  { path: '**', redirectTo: '/client' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
