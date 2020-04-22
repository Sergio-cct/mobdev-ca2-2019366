import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

const routes: Routes = [
    {
        path: '', loadChildren: () => import('./pages/tabs/tabs.module').then(m => m.TabsPageModule)
    },

    {
        path: 'episodes',
        loadChildren: () => import('./pages/episodes/episodes.module').then(m => m.EpisodesPageModule)
    },
    {
        path: 'episode-details',
        loadChildren: () => import('./pages/episode-details/episode-details.module').then(m => m.EpisodeDetailsPageModule)
    },
  
  
    {
        path: 'characters',
        loadChildren: () => import('./pages/characters/characters.module').then(m => m.CharactersPageModule)
    },
    {
        path: 'character-details',
        loadChildren: () => import('./pages/character-details/character-details.module').then(m => m.CharacterDetailsPageModule)
    }
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
    ],
    exports: [RouterModule]
})
export class AppRoutingModule { }
