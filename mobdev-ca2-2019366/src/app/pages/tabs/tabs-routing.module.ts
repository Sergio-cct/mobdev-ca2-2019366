import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'episodes',
        children: [
          {
            path: '',
            loadChildren: () => import('../episodes/episodes.module').then( m => m.EpisodesPageModule)
          },
          {
            path: ':id',
            loadChildren: () => import('../episode-details/episode-details.module').then( m => m.EpisodeDetailsPageModule)
          }
        ]
      },
      {
        path: 'caracters',
        children: [
          {
            path: '',
            loadChildren: () => import('../caracters/caracters.module').then( m => m.CaractersPageModule)
          },
          {
            path: ':id',
            loadChildren: () => import('../caracter-details/caracter-details.module').then( m => m.CaracterDetailsPageModule)
          }
        ]
      },
      {
        path: 'quotes',
        children: [
          {
            path: '',
            loadChildren: () => import('../quotes/quotes.module').then( m => m.QuotesPageModule)
          },
          {
            path: ':id',
            loadChildren: () => import('../quote-details/quote-details.module').then( m => m.QuoteDetailsPageModule)
          }
        ]
      },
      {
        path: 'deaths',
        children: [
          {
            path: '',
            loadChildren: () => import('../deaths/deaths.module').then( m => m.DeathsPageModule)
          }
        ]
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/episodes',
    pathMatch: 'full'
  }
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabsPageRoutingModule {}
