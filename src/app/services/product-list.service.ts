import { Injectable } from "@angular/core";
import { Product } from "../models/product.model";

@Injectable({
  providedIn: "root",
})
export class ProductListService {
  productList: Product[] = [
    {
      id: 1,
      name: "A",
      category: "Category Description and tags",
      sellingPrice: 34.55,
      MRPPrice: 60,

      image: "https://material.angular.io/assets/img/examples/shiba2.jpg",
      imageAlt: "Photo of a Shiba Inu",
    },
    {
      id: 2,
      name: "B",
      category: "Category Description and tags",
      sellingPrice: 34.55,
      MRPPrice: 60,

      image: "https://material.angular.io/assets/img/examples/shiba2.jpg",
      imageAlt: "Photo of a Shiba Inu",
    },
    {
      id: 3,
      name: "c",
      category: "Category Description and tags",
      sellingPrice: 34.55,
      MRPPrice: 60,

      image: "https://material.angular.io/assets/img/examples/shiba2.jpg",
      imageAlt: "Photo of a Shiba Inu",
    },
    {
      id: 4,
      name: "D",
      category: "Category Description and tags",
      sellingPrice: 39,
      MRPPrice: 60,
      image: "https://material.angular.io/assets/img/examples/shiba2.jpg",
      imageAlt: "Photo of a Shiba Inu",
    },
    {
      id: 5,
      name: "F",
      category: "Category Description and tags",
      sellingPrice: 88,
      MRPPrice: 100,

      image: "https://material.angular.io/assets/img/examples/shiba2.jpg",
      imageAlt: "Photo of a Shiba Inu",
    },
    {
      id: 6,
      name: "g",
      category: "Category Description and tags",
      sellingPrice: 90,
      MRPPrice: 159,

      image: "https://material.angular.io/assets/img/examples/shiba2.jpg",
      imageAlt: "Photo of a Shiba Inu",
    },
    {
      id: 7,
      name: "Name of Product",
      category: "Category Description and tags",
      sellingPrice: 100,
      MRPPrice: 120,

      image: "https://material.angular.io/assets/img/examples/shiba2.jpg",
      imageAlt: "Photo of a Shiba Inu",
    },
    {
      id: 8,
      name: "Name of Product",
      category: "Category Description and tags",
      sellingPrice: 34.55,
      MRPPrice: 60,
      image: "https://material.angular.io/assets/img/examples/shiba2.jpg",
      imageAlt: "Photo of a Shiba Inu",
    },
    {
      id: 9,
      name: "Name of Product",
      category: "Category Description and tags",
      sellingPrice: 34.55,
      MRPPrice: 60,
      image: "https://material.angular.io/assets/img/examples/shiba2.jpg",
      imageAlt: "Photo of a Shiba Inu",
    },
    {
      id: 10,
      name: "Name of Product",
      category: "Category Description and tags",
      sellingPrice: 34.55,
      MRPPrice: 60,
      image: "https://material.angular.io/assets/img/examples/shiba2.jpg",
      imageAlt: "Photo of a Shiba Inu",
    },
    {
      id: 11,
      name: "Name of Product",
      category: "Category Description and tags",
      sellingPrice: 34.55,
      MRPPrice: 60,
      image: "https://material.angular.io/assets/img/examples/shiba2.jpg",
      imageAlt: "Photo of a Shiba Inu",
    },
    {
      id: 12,
      name: "Name of Product",
      category: "Category Description and tags",
      sellingPrice: 34.55,
      MRPPrice: 60,
      image: "https://material.angular.io/assets/img/examples/shiba2.jpg",
      imageAlt: "Photo of a Shiba Inu",
    },
    {
      id: 13,
      name: "Name of Product",
      category: "Category Description and tags",
      sellingPrice: 34.55,
      MRPPrice: 60,
      image: "https://material.angular.io/assets/img/examples/shiba2.jpg",
      imageAlt: "Photo of a Shiba Inu",
    },
    {
      id: 14,
      name: "Name of Product",
      category: "Category Description and tags",
      sellingPrice: 34.55,
      MRPPrice: 60,
      image: "https://material.angular.io/assets/img/examples/shiba2.jpg",
      imageAlt: "Photo of a Shiba Inu",
    },
    {
      id: 15,
      name: "Name of Product",
      category: "Category Description and tags",
      sellingPrice: 34.55,
      MRPPrice: 60,
      image: "https://material.angular.io/assets/img/examples/shiba2.jpg",
      imageAlt: "Photo of a Shiba Inu",
    },
    {
      id: 16,
      name: "Name of Product",
      category: "Category Description and tags",
      sellingPrice: 34.55,
      MRPPrice: 60,
      image: "https://material.angular.io/assets/img/examples/shiba2.jpg",
      imageAlt: "Photo of a Shiba Inu",
    },
  ];

  getAllProducts() {
    return this.productList;
  }

  constructor() {}
}
