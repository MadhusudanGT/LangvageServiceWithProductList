import { Component, OnInit } from "@angular/core";
import { ProductListService } from "src/app/services/product-list.service";
import { Product } from "src/app/models/product.model";
import { ProductMessengerService } from "src/app/services/product-messenger.service";
import { MediaChange, MediaObserver } from "@angular/flex-layout";
import { Subscription, from } from "rxjs";

@Component({
  selector: "product-list",
  templateUrl: "./product-list.component.html",
  styleUrls: ["./product-list.component.css"],
})
export class ProductListComponent implements OnInit {
  products: Product[] = [];
  selectedProperty;
  mediaSub: Subscription;
  breakpoint: number = 4;
  dropDownOption = {
    option1: "sellingPrice",
    option2: "priceHighToLow",
    option3: "name",
  };

  constructor(
    private cardService: ProductMessengerService,
    private productListService: ProductListService,
    public mediaObserver: MediaObserver
  ) {}

  ngOnInit(): void {
    this.products = this.productListService.getAllProducts();
  }

  config = {
    itemsPerPage: 8,
    currentPage: 1,
    totalItems: this.products.length,
  };

  sortOrder() {
    if (this.selectedProperty !== "priceHighToLow") {
      this.products.sort((a, b) => {
        return a[this.selectedProperty] < b[this.selectedProperty]
          ? -1
          : a[this.selectedProperty] > b[this.selectedProperty]
          ? 1
          : 0;
      });
    } else {
      this.selectedProperty = "sellingPrice";
      this.products
        .sort((a, b) => {
          return a[this.selectedProperty] < b[this.selectedProperty]
            ? -1
            : a[this.selectedProperty] > b[this.selectedProperty]
            ? 1
            : 0;
        })
        .reverse();
    }
  }
  pageChanged(event) {
    this.config.currentPage = event;
  }
}
