import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PlantsComponent } from './plants/plants.component';
import { PlantDetailComponent } from './plant-detail/plant-detail.component';

const routes: Routes = [
  { path: '', redirectTo: '/plants', pathMatch: 'full' },
  { path: 'detail/:id', component: PlantDetailComponent },
  { path: 'plants', component: PlantsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
