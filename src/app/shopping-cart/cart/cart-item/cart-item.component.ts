import {
  Component,
  OnInit,
  Input,
  ChangeDetectionStrategy,
} from "@angular/core";
import { Product } from "src/app/models/product.model";
import { ProductMessengerService } from "src/app/services/product-messenger.service";
import { ActivatedRoute, Router } from "@angular/router";

@Component({
  selector: "cart-item",
  templateUrl: "./cart-item.component.html",
  styleUrls: ["./cart-item.component.css"],
  changeDetection: ChangeDetectionStrategy.Default,
})
export class CartItemComponent implements OnInit {
  @Input() itemDetail: Product;
  constructor(
    private productMessengerService: ProductMessengerService,
    private router: Router
  ) {}

  total: number;
  qty: number = 1;

  ngOnInit(): void {
    // console.log(this.itemDetail);
    this.total = this.itemDetail.sellingPrice * this.qty;
  }
  ngOnChange() {}
  removeItem() {
    if (this.qty > 1) {
      this.qty--;
      this.total = this.itemDetail.sellingPrice * this.qty;
    } else if (this.qty === 1) {
      console.log(this.itemDetail);
      this.productMessengerService.removeMessage(this.itemDetail);
      this.qty--;
    }
  }

  addItem() {
    this.qty++;
    this.total = this.itemDetail.sellingPrice * this.qty;
  }

  onRemove() {
    console.log(this.itemDetail);
    this.productMessengerService.removeMessage(this.itemDetail);
    // this.router.navigateByUrl("/cart");
    // location.reload();
  }
}
