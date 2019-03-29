import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product-service';
import { Product } from 'src/app/models/product';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  productList: Array<Product>;

  constructor(private productService: ProductService) { }

  ngOnInit() {
    this.productList = this.productService.getAllProducts();
  }

}
