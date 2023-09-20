import { Component } from '@angular/core';
import { Product } from 'src/app/models/product.interface';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {

  title: string = 'Products';
  products: Product[];
  selectedProduct: Product;

  onSelect(product: Product): void {
    this.selectedProduct = product;
  }

  constructor() {
    this.products = [
      {
          name: 'Trek SSL 2023',
          price: 1799.9,
          description: 'Racing bike.',
          discontinued: false,
          fixedPrice: false,
          imageUrl: 'https://firebasestorage.googleapis.com/v0/b/angularstore-29f4b.appspot.com/o/products%2Ftrek.jpg?alt=media&token=42e1650e-7ff9-467f-bde7-0423786c94fd',
          modifiedDate: new Date(2022, 12, 8)
      },
      {
          name: 'City XT 2022',
          price: 1659.5,
          description: 'City bike.',
          discontinued: true,
          fixedPrice: false,
          imageUrl: 'https://firebasestorage.googleapis.com/v0/b/angularstore-29f4b.appspot.com/o/products%2Fcity.jpg?alt=media&token=5a79c5c3-177f-44b3-b99e-fe6be97c4f7a',
          modifiedDate: new Date(2022, 1, 12)
      },
      {
          name: 'Cosmic Cobat 2022',
          price: 1499.9,
          description: 'Great bike.',
          discontinued: false,
          fixedPrice: false,
          imageUrl: 'https://firebasestorage.googleapis.com/v0/b/angularstore-29f4b.appspot.com/o/products%2Fcosmic-cobat.jpg?alt=media&token=9df1af7a-9b79-4bf6-9b98-9079581fb7d1',
          modifiedDate: new Date(2023, 1, 2)
      },
      {
          name: 'Hero DTB 2023',
          price: 1759,
          description: 'Champion\'s bike.',
          discontinued: false,
          fixedPrice: true,
          imageUrl: 'https://firebasestorage.googleapis.com/v0/b/angularstore-29f4b.appspot.com/o/products%2Fhero-dtb.jpg?alt=media&token=8cda2f52-2b86-43eb-aa86-2537346e8736',
          modifiedDate: new Date(2023, 1, 24)
      },
      {
          name: 'S-WORKS 2023',
          price: 1999.9,
          description: 'Ultra bike.',
          discontinued: false,
          fixedPrice: false,
          imageUrl: 'https://firebasestorage.googleapis.com/v0/b/angularstore-29f4b.appspot.com/o/products%2Fs-works.jpg?alt=media&token=5bf064a9-c8f7-4b47-a113-8825f95934f4',
          modifiedDate: new Date(2023, 1, 19)
      }
  ];
  }

}
