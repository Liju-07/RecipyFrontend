import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AddRecipyComponent } from './add-recipy/add-recipy.component';
import { ViewRecipyComponent } from './view-recipy/view-recipy.component';
import { RouterModule, Routes } from '@angular/router';
import {HttpClientModule} from '@angular/common/http'
import { FormsModule } from '@angular/forms';
const app:Routes=[
  {
    path:"",component:ViewRecipyComponent
  },
  {
    path:"view",component:ViewRecipyComponent
  },  {
    path:"add",component:AddRecipyComponent
  }
]

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    AddRecipyComponent,
    ViewRecipyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(app),
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
