import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule, NO_ERRORS_SCHEMA } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { BsDropdownModule, BsDropdownConfig } from 'ngx-bootstrap/dropdown';
import { TooltipConfig, TooltipModule } from 'ngx-bootstrap/tooltip';
import { NgxIntlTelInputModule } from 'ngx-intl-tel-input';
import { StoreModule } from "@ngrx/store";
import { AppComponent } from './app.component';
import { CreateUserComponent } from './components/create-user/create-user.component';
import { FooterSectionComponent } from './components/footer-section/footer-section.component';
import { BenefitsSectionComponent } from './components/benefits-section/benefits-section.component';
import { HomeComponent } from './components/home/home.component';
import { UserFormComponent } from './components/user-form/user-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { reducer } from './store/filed.reducers';

@NgModule({
  declarations: [
    AppComponent,
    CreateUserComponent,
    FooterSectionComponent,
    BenefitsSectionComponent,
    HomeComponent,
    UserFormComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    StoreModule.forRoot({users: reducer}),
    FormsModule,
    ReactiveFormsModule,
    BsDropdownModule.forRoot(),
    TooltipModule.forRoot(), 
    NgxIntlTelInputModule,
  ],
  providers: [BsDropdownConfig, TooltipConfig],
  schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA],
  bootstrap: [AppComponent]
})
export class AppModule { }
