import { PipeTransform, Pipe } from "@angular/core";
import { orderBy } from "lodash";
/*
 *ngFor="let c of oneDimArray | sortBy:'asc'"
 *ngFor="let c of arrayOfObjects | sortBy:'asc':'propertyName'"
 */
@Pipe({ name: "SortBy" })
export class SortBy implements PipeTransform {
  transform(value: any[], order = "", column: string = ""): any[] {
    if (!value || order === "" || !order) {
      return value;
    } // no array
    if (value.length <= 1) {
      return value;
    } // array with only one item
    if (!column || column === "") {
      if (order === "asc") {
        return value.sort();
      } else {
        return value.sort().reverse();
      }
    } // sort 1d array
    return orderBy(value, [column], [order]);
  }
}
