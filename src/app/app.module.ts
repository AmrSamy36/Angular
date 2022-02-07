import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './layout/navbar/navbar.component';
import { TopNavbarComponent } from './layout/top-navbar/top-navbar.component';
import { ProductItemsComponent } from './features/product/product-items/product-items.component';
import { ProductListComponent } from './features/product/product-list/product-list.component';
import { ProductListContainerComponent } from './features/product/product-list-container/product-list-container.component';
import { DropdownComponent } from './shared/dropdown/dropdown.component';
import { HomeComponentComponent } from './shared/home-component/home-component.component';
import { AboutComponentComponent } from './shared/about-component/about-component.component';
import { NotFoundComponent } from './shared/not-found/not-found.component';
import { ContactComponent } from './shared/contact/contact.component';
import { ProductDetailsComponent } from './shared/product-details/product-details.component';
import { AddProductComponent } from './shared/add-product/add-product.component';
import { LoginComponent } from './shared/login/login.component';
import { RegisterComponent } from './shared/register/register.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    TopNavbarComponent,
    ProductItemsComponent,
    ProductListComponent,
    ProductListContainerComponent,
    DropdownComponent,
    HomeComponentComponent,
    AboutComponentComponent,
    NotFoundComponent,
    ContactComponent,
    ProductDetailsComponent,
    AddProductComponent,
    LoginComponent,
    RegisterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
