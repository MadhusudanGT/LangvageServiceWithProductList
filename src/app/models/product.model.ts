export class Product {
  id: number;
  name: string;
  category: string;
  sellingPrice: number;
  MRPPrice: number;
  image: string;
  imageAlt: string;
  constructor(id, name, category, sellingPrice, MRPPrice, image, imageAlt) {
    this.id = id;
    this.name = name;
    this.category = category;
    this.sellingPrice = sellingPrice;
    this.MRPPrice = MRPPrice;
    this.image = image;
    this.imageAlt = imageAlt;
  }
}
