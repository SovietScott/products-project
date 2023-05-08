import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {Routes, RouterModule} from '@angular/router';
import {HttpClientModule} from '@angular/common/http';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatTableModule} from '@angular/material/table';
import {MatCardModule} from '@angular/material/card';
import { ProductListComponent } from './product-list/product-list.component';
import { ErrorComponent } from './shared/error/error.component';

const appRoutes : Routes = [
  {path: '', component: ProductListComponent},
 /* {},
  {}*/
]

@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    ErrorComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatProgressSpinnerModule,
    MatSnackBarModule,
    MatToolbarModule,
    MatTableModule,
    MatCardModule,
    RouterModule.forRoot(appRoutes),
  ],
  providers: [ErrorComponent],
  bootstrap: [AppComponent],
  exports: [RouterModule, ErrorComponent]
})
export class AppModule { }
