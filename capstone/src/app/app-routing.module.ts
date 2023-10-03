import { PhotosService } from './../../../m3/s3/g1/HomeworkDay1/src/app/photos.service';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/modules/feature/components/home/home.component';
import { ProductsPageComponent } from './pages/modules/feature/components/products-page/products-page.component';
import { CartComponent } from './pages/modules/feature/components/cart/cart.component';
import { ProductDetailsComponent } from './pages/modules/feature/components/product-details/product-details.component';
import { CheckoutComponent } from './pages/modules/feature/components/checkout/checkout.component';
import { PaymentComponent } from './pages/modules/feature/components/payment/payment.component';
import { PaymentSuccessComponent } from './pages/modules/feature/components/payment-success/payment-success.component';
import { OrderComponent } from './pages/modules/feature/components/order/order.component';
import { OrderDetailsComponent } from './pages/modules/feature/components/order-details/order-details.component';

const routes: Routes = [
  { path:'', component: HomeComponent },
  { path: 'products', component: ProductsPageComponent},
  { path: 'cart', component: CartComponent},
  { path: 'product-details/:id', component: ProductDetailsComponent},
  { path: 'checkout', component: CheckoutComponent},
  { path: 'checkout/payment/:id', component: PaymentComponent},
  { path: 'payment-success', component: PaymentSuccessComponent},
  //{ path: 'login', component: LoginComponent},
  //{ path: 'register', component: RegisterComponent},
  //{ path: 'order-summary', component: OrderSummaryComponent},
  { path: 'account/orders', component: OrderComponent},
  { path: 'order/:orderId', component: OrderDetailsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
