import { AddProductComponent } from './shared/add-product/add-product.component';
import { RegisterComponent } from './shared/register/register.component';
import { LoginComponent } from './shared/login/login.component';
import { ContactComponent } from './shared/contact/contact.component';
import { NotFoundComponent } from './shared/not-found/not-found.component';
import { ProductListContainerComponent } from './features/product/product-list-container/product-list-container.component';
import { AboutComponentComponent } from './shared/about-component/about-component.component';
import { HomeComponentComponent } from './shared/home-component/home-component.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductDetailsComponent } from './shared/product-details/product-details.component';

const routes: Routes = [
  { path: '', component: HomeComponentComponent },
  { path: 'about', component: AboutComponentComponent },
  { path: 'products', component: ProductListContainerComponent },
  { path: 'products/:id', component: ProductDetailsComponent },
  { path: 'login', component: LoginComponent },
  { path: 'addProduct', component: AddProductComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'contact', component: ContactComponent },
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
