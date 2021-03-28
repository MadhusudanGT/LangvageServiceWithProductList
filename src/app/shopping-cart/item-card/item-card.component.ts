import { Component, OnInit, Input } from "@angular/core";
import { Product } from "src/app/models/product.model";
import { ProductMessengerService } from "src/app/services/product-messenger.service";
import {MatSnackBar} from '@angular/material/snack-bar';
@Component({
  selector: "item-card",
  templateUrl: "./item-card.component.html",
  styleUrls: ["./item-card.component.css"],
})
export class ItemCardComponent implements OnInit {
  durationInSeconds = 5;
  constructor(private productMessengerService: ProductMessengerService,private _snackBar: MatSnackBar) {}
  @Input("productItem") productItem: Product;
  ngOnInit(): void {}
  addToCart(item: Product) {
    this.productMessengerService.sendMessage(Object.assign({}, item));
    this.SuccessSnackBar();
  }


  openSnackBar() {
    this._snackBar.open('PLEASE FILL VALIDE DETAILS', "!!!!", {
      duration: 5000,
    });
  }
  SuccessSnackBar(){
    this._snackBar.open('PRODUCT ADDED TO CART SUCCESSFULLY', ":))))", {
      duration: 10000,
    });
  }
}
