import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HomeComponent } from "./components/home/home.component";
import { CartComponent } from "./shopping-cart/cart/cart.component";
import {LangvageServiceComponent} from "../app/langvage-service/langvage-service.component"
import { ProductListComponent } from "./components/product-list/product-list.component";

const routes: Routes = [
  { path: "cart", component: CartComponent },
  { path: "", component: ProductListComponent },
  { path: "langvage", component: LangvageServiceComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
