import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminComponent } from './admin/admin.component';
import { AddproductComponent } from './addproduct/addproduct.component';
import { AdminNavComponent } from './admin-nav/admin-nav.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { OrderlistComponent } from './orderlist/orderlist.component';
import { ProductEditComponent } from './product-edit/product-edit.component';
import { CartComponent } from './cart/cart.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { ModelComponent } from './model/model.component';
import { ServicesComponent } from './services/services.component';
import { SingupComponent } from './singup/singup.component';
import { UserOrderComponent } from './user-order/user-order.component';

@NgModule({
  declarations: [
    AppComponent,
    AdminComponent,
    AddproductComponent,
    AdminNavComponent,
    DashboardComponent,
    OrderlistComponent,
    ProductEditComponent,
    CartComponent,
    HomeComponent,
    LoginComponent,
    ModelComponent,
    ServicesComponent,
    SingupComponent,
    UserOrderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
