import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';  // Ensure this import is present

import { AppComponent } from './app.component';
import { ResidencesComponent } from './residences/residences.component';
import { ResidenceDetailsComponent } from './residence-details/residence-details.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AddResidenceComponent } from './add-residence/add-residence.component';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http'; // Import HttpClientModule


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ResidencesComponent,
    ResidenceDetailsComponent,
    NotFoundComponent,
    AddResidenceComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule ,
    RouterModule,
    HttpClientModule,// Enable HTTP client

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
