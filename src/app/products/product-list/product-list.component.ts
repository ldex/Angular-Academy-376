import { Component } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { Product } from 'src/app/models/product.interface';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {

  title: string = 'Products';
  //products: Product[];
  products$: Observable<Product[]>;
  productsNumber: number = 0;
  selectedProduct: Product;

  // Pagination
  pageSize = 5;
  start = 0;
  end = this.pageSize;
  pageNumber = 1;

  previousPage(): void {
    this.start -= this.pageSize;
    this.end -= this.pageSize;
    this.pageNumber--;
    this.selectedProduct = null;
  }

  nextPage(): void {
    this.start += this.pageSize;
    this.end += this.pageSize;
    this.pageNumber++;
    this.selectedProduct = null;
  }


  onSelect(product: Product): void {
    this.selectedProduct = product;
  }

  constructor(private productService: ProductService) {
    this.products$ = this
                      .productService
                      .products$
                      .pipe(
                        tap(products => this.productsNumber = products.length)
                      );

    // this
    //   .productService
    //   .products$
    //   .subscribe(
    //     data => this.products = data
    //   )
  }

}
