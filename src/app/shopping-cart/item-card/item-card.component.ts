import { Component, OnInit, Input } from "@angular/core";
import { Product } from "src/app/models/product.model";
import { ProductMessengerService } from "src/app/services/product-messenger.service";

@Component({
  selector: "item-card",
  templateUrl: "./item-card.component.html",
  styleUrls: ["./item-card.component.css"],
})
export class ItemCardComponent implements OnInit {
  constructor(private productMessengerService: ProductMessengerService) {}
  @Input("productItem") productItem: Product;
  ngOnInit(): void {}
  addToCart(item: Product) {
    this.productMessengerService.sendMessage(Object.assign({}, item));
  }
}
