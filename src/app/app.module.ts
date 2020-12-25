
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { NvBarComponent } from './nv-bar/nv-bar.component';
import { ProductsComponent } from './products/products.component';
import { MyOrdersComponent } from './my-orders/my-orders.component';
import { AdminProductsComponent } from './admin/admin-products/admin-products.component';
import { AdminOrdersComponent } from './admin/admin-orders/admin-orders.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { LoginComponent } from './login/login.component' ;
import {AngularFireModule} from 'angularfire2' ;
import {AngularFireDatabaseModule} from 'angularfire2/database' ;
import { environment } from 'src/environments/environment';






@NgModule({
  declarations: [
    AppComponent,
    NvBarComponent,
    ProductsComponent,
    MyOrdersComponent,
    AdminProductsComponent,
    AdminOrdersComponent,
    ShoppingCartComponent,
    LoginComponent,
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule ,
    ReactiveFormsModule ,
    HttpClientModule,
    NgbModule ,
    AngularFireDatabaseModule ,
    AngularFireModule.initializeApp(environment.firebase)


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
