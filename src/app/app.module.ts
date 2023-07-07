import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { AuthLayoutComponent } from './layouts/auth-layout/auth-layout.component';
import { CompanyLayoutComponent } from './layouts/company-layout/company-layout.component';

import { ComponentsModule } from './shared/components/components.module';
import { RouterModule } from '@angular/router';

import { MessageService } from 'primeng/api';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,

    AdminLayoutComponent,
    AuthLayoutComponent,
    CompanyLayoutComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    // # shared components module
    ComponentsModule,

    
    
  ],
  // providers: [],
  providers: [
    MessageService, // Add MessageService to the providers
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
