import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { EventsComponent } from './pages/events/events.component';
import { LoginComponent } from './pages/login/login.component';
import { NewsComponent } from './pages/news/news.component';
import { PostsComponent } from './pages/posts/posts.component';
import { ProductListComponent } from './pages/product-list/product-list.component';
import { RegisterComponent } from './pages/register/register.component';
import { StoreComponent } from './pages/store/store.component';
import { TeamComponent } from './pages/team/team.component';

import { AddProductComponent } from './components/add-product/add-product.component';
import { CartItemComponent } from './components/cart-item/cart-item.component';
import { ShoppingCartComponent } from './components/shopping-cart/shopping-cart.component';
import { StoreItemComponent } from './components/store-item/store-item.component';
import { FooterComponent } from './components/footer/footer.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { FormsModule } from '@angular/forms';



import {NgxsModule} from '@ngxs/store';
import {NgxsReduxDevtoolsPluginModule} from '@ngxs/devtools-plugin';
import {NgxsLoggerPluginModule} from '@ngxs/logger-plugin';
import { CartState } from './store/cart.state';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    EventsComponent,
    LoginComponent,
    NewsComponent,
    PostsComponent,
    ProductListComponent,
    RegisterComponent,
    StoreComponent,
    TeamComponent,
    
    AddProductComponent,
    CartItemComponent,
    ShoppingCartComponent,
    StoreItemComponent,
    FooterComponent,
    NavigationComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    NgxsModule.forRoot([CartState]),
    NgxsReduxDevtoolsPluginModule.forRoot(),
    NgxsLoggerPluginModule.forRoot(),
    NgbModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
