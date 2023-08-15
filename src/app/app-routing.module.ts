import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { StoreItemComponent } from './components/store-item/store-item.component';

import { AboutComponent } from './pages/about/about.component';
import { EventsComponent } from './pages/events/events.component';
import { NewsComponent } from './pages/news/news.component';
import { RegisterComponent } from './pages/register/register.component';

import { AddProductComponent } from './components/add-product/add-product.component';
import { LoginComponent } from './pages/login/login.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'product', component: StoreItemComponent },
  { path: 'news', component: NewsComponent },
  { path: 'about', component: AboutComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'events', component: EventsComponent },
  { path: 'login', component: LoginComponent },
  { path: 'addproduct', component: AddProductComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
