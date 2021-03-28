import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { SVMaterialModule } from "./modules/material.module";
import { HomeComponent } from "./components/home/home.component";
import { SharedModule } from "./modules/shared.module";
import { NgOtpInputModule } from  'ng-otp-input';
import { ProductListComponent } from "./components/product-list/product-list.component";
import { ItemCardComponent } from "./shopping-cart/item-card/item-card.component";
import { ProductListService } from "./services/product-list.service";
import { ProductMessengerService } from "./services/product-messenger.service";
import { ChangeLanguageService } from "./services/change-language.service";
import { CartComponent } from "./shopping-cart/cart/cart.component";
import { CartItemComponent } from "./shopping-cart/cart/cart-item/cart-item.component";
import { SortBy } from "./pipes/sort-by.pipe";
import { LangvageServiceComponent } from './langvage-service/langvage-service.component';
import { CarouselComponent } from './carousel/carousel.component';
import { NgImageSliderModule } from 'ng-image-slider';
import { MatCarouselModule } from '@ngmodule/material-carousel';
import { LoginPageComponent } from './login-page/login-page.component';
import { RegistrationPageComponent } from './registration-page/registration-page.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProductListComponent,
    ItemCardComponent,
    CartComponent,
    CartItemComponent,
    SortBy,
    LangvageServiceComponent,
    CarouselComponent,
    LoginPageComponent,
    RegistrationPageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SVMaterialModule,
    SharedModule,
    FormsModule,
    NgOtpInputModule,
    NgImageSliderModule,
    MatCarouselModule

  ],
  providers: [
    ProductListService,
    ProductMessengerService,
    ChangeLanguageService,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
