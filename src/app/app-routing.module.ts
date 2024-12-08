import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CatalogComponent } from './catalog/catalog.component';
import { CartComponent } from './cart/cart.component';
import { SignInComponent } from './user/sign-in.component';
import { TemplateFormControlsComponent } from './user/template-form-controls/template-form-controls.component';

const routes: Routes = [
  { path: 'home',component: HomeComponent, title: "Home - Joe's Robot shop"},
  { path: 'catalog/:filter',component: CatalogComponent, title: "Catalog - Joe's Robot shop"},
  { path: 'cart',component: CartComponent, title: "Cart - Joe's Robot shop"},
  { path: '',redirectTo: '/home', pathMatch: 'full'},
  { path: 'sign-in',component: SignInComponent, title: "Sign-in - Joe's Robot shop"},
  { path: 'form-controls',component: TemplateFormControlsComponent}
];

@NgModule({
  declarations: [], 
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
}) 
export class AppRoutingModule { }
