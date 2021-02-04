import { Component, OnInit, AfterViewInit } from "@angular/core";
import { ProductMessengerService } from "src/app/services/product-messenger.service";
import { Product } from "src/app/models/product.model";

@Component({
  selector: "cart",
  templateUrl: "./cart.component.html",
  styleUrls: ["./cart.component.css"],
})
export class CartComponent implements OnInit {
  itemList = [];
  totalBill: number = 0;
  constructor(private productMessengerService: ProductMessengerService) {}

  ngOnInit(): void {
    console.log("clicked");
    // this.productMessengerService.getMessage().subscribe((data: Product) => {
    //   if (data)
    //     this.itemList.push({
    //       productId: data.id,
    //       image: data.image,
    //       imageAlt: data.imageAlt,
    //       sellingPrice: data.sellingPrice,
    //       qty: 1,
    //     });
    // });
    // let items: Product[];
    // items = this.productMessengerService.getMessage();
    // items.forEach((data) =>
    //   this.itemList.push({
    //     productId: data.id,
    //     image: data.image,
    //     imageAlt: data.imageAlt,
    //     sellingPrice: data.sellingPrice,
    //     qty: 1,
    //   })
    // );

    this.itemList = this.productMessengerService.getMessage();
  }
  Billing() {
    this.totalBill = 0;
    console.log(this.itemList.length);
    this.itemList.forEach(
      (item) => (this.totalBill += item.qty * item.sellingPrice)
    );
    console.log(Math.round(this.totalBill * 100) / 100);
  }

  onClick() {
    // console.log(this.itemList);
    this.ngOnInit();
  }

  ngOnChange() {
    // this.itemList = this.productMessengerService.getMessage();
  }
  ngOnDestroy() {
    this.itemList = [];
  }
}
