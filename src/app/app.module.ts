import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';
import {MatButtonModule} from '@angular/material/button';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatTableModule} from '@angular/material/table';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { FleetComponent } from './fleet/fleet.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import {MatCardModule} from '@angular/material/card';
import { AssetStatusComponent } from './asset-status/asset-status.component';
import {MatSelectModule} from '@angular/material/select';
import { HttpClientModule } from '@angular/common/http';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import { FuelLevelComponent } from './fuel-level/fuel-level.component';
import { IdlingLevelComponent } from './idling-level/idling-level.component';
import { FeelingsComponent } from './feelings/feelings.component';
import { NotificationComponent } from './notification/notification.component';
import { AssetsUtilizationComponent } from './assets-utilization/assets-utilization.component';
import { LocationComponent } from './location/location.component';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatMenuModule} from '@angular/material/menu';
import {MatChipsModule} from '@angular/material/chips';
import { LoginComponent } from './login/login.component';
import {MatInputModule} from '@angular/material/input';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import { ApplicationComponent } from './application/application.component';
import {MatDividerModule} from '@angular/material/divider';

@NgModule({
  declarations: [
    AppComponent,
    FleetComponent,
    DashboardComponent,
    AssetStatusComponent,
    FuelLevelComponent,
    IdlingLevelComponent,
    FeelingsComponent,
    NotificationComponent,
    AssetsUtilizationComponent,
    LocationComponent,
    LoginComponent,
    ApplicationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatSidenavModule,
    MatListModule,
    MatButtonModule,
    MatFormFieldModule,
    MatExpansionModule,
    MatTableModule,
    MatCheckboxModule,
    MatCardModule,
    MatSelectModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonToggleModule,
    MatTooltipModule,
    MatMenuModule,
    MatChipsModule,
    MatFormFieldModule,
    MatInputModule,
    MatAutocompleteModule,
    MatDividerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
