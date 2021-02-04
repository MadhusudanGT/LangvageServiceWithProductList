import { Injectable } from "@angular/core";
// import { Subject, from } from "rxjs";
import { Product } from "../models/product.model";
@Injectable({
  providedIn: "root",
})
export class ProductMessengerService {
  // itemData = new Subject<any>();
  list: Product[] = [];

  constructor() {}
  sendMessage(data: any) {
    // this.itemData.next(data);
    this.list.push(data);
  }
  // clearMsg(data:any){
  //   this.itemData.next();
  // }
  getMessage() {
    // return this.itemData.asObservable();
    return this.list;
  }

  removeMessage(data) {
    let productIdToRemove = data.id;
    this.list = this.list.filter((item) => item.id !== productIdToRemove);
    console.log(this.list);
  }
}
