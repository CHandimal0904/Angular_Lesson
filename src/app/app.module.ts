import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { containerComponent } from './container/container.component';
import { SearchComponent } from './container/search/search.component';
import { FormsModule } from '@angular/forms';
import { ProductListComponent } from './container/product-list/product-list.component';
import { ProductComponent } from './container/product-list/product/product.component';
import { FilterComponent } from './container/product-list/filter/filter.component';

@NgModule({
  declarations: [
    AppComponent,
    containerComponent,
    SearchComponent,
    ProductListComponent,
    ProductComponent,
    FilterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
