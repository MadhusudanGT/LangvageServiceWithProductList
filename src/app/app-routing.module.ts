import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HomeComponent } from "./components/home/home.component";
import { CartComponent } from "./shopping-cart/cart/cart.component";
import {LangvageServiceComponent} from "../app/langvage-service/langvage-service.component"
import { ProductListComponent } from "./components/product-list/product-list.component";
import {CarouselComponent} from "./carousel/carousel.component";
import {LoginPageComponent} from "./login-page/login-page.component";
import {RegistrationPageComponent} from "./registration-page/registration-page.component";
import {DashboardComponent} from "./dashboard/dashboard.component";

const routes: Routes = [
  { path: "cart", component: CartComponent },
  { path: "", component: ProductListComponent },
  { path: "langvage", component: LangvageServiceComponent },
  {path:'carousel' , component:CarouselComponent},
  {path:'login',component:LoginPageComponent},
{path:'registration',component:RegistrationPageComponent},
{path:'dashboard',component:DashboardComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
