import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '../shared/shared.module';


import { CardComponent } from './components/gifs-cards/gifs-cards.component';
import { CardListComponent } from './components/card-list/card-list.component';
import { HomePageComponent } from './pages/home/home-page.component';
import { SearchBoxComponent } from './components/search-box/seacrh-box.component';




@NgModule({
  declarations: [
    CardComponent,
    CardListComponent,
    HomePageComponent,
    SearchBoxComponent

  ],
  imports: [
    CommonModule,
    SharedModule,


  ],
  exports:[
    HomePageComponent
  ]
})
export class GifsModule { }
