import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ResidencesComponent } from './residences/residences.component';
import { ResidenceDetailsComponent } from './residence-details/residence-details.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { AddResidenceComponent } from './add-residence/add-residence.component';

const routes: Routes = [
  { path: 'residences', component: ResidencesComponent },
  { path: 'residences/:id', component: ResidenceDetailsComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'add-residence', component: AddResidenceComponent }, // Add this line
  { path: '**', component: NotFoundComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
