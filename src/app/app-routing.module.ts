import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { BasketComponent } from './components/basket/basket.component';
import { ShopComponent } from './components/shop/shop.component';
import { ProductInfoComponent } from './components/product-info/product-info.component';


const routes: Routes = [
  { path: '', component: ShopComponent },
  { path: 'basket', component: BasketComponent },
  {path: 'product-info/:name', component: ProductInfoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
