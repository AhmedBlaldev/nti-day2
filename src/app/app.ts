import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { Store } from './Models/store';
import { IProduct } from './Models/iproduct';
import { ICategory } from './Models/icategory';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class AppComponent {
  storeInfo: Store;
  ProductList: IProduct[];
  CategoryList: ICategory[];
  IsPurshased: boolean = false;
  selectedCategoryID: number = 0;

  constructor() {
    this.storeInfo = new Store(
      'NTI Tech Store',
      ['Cairo', 'Alex'],
      'assets/images/R.jpeg'

    );

    this.CategoryList = [
      { ID: 1, Name: 'Apple' },
      { ID: 2, Name: 'Samsung' },
      { ID: 3, Name: 'Oppo' },
      { ID: 4, Name: 'Nokia' }
    ];

   
    this.ProductList = [
      {
      productId: 1,
      productName: 'Apple iPhone 15',
      productImgUrl:
        'https://f.nooncdn.com/p/pnsku/N53432547A/45/_/1694762192/fd45d583-8af9-4ff3-8032-af4a5a3c553c.jpg?format=avif&wproductIdth=240',
      productQuantity: 20,
      productPrice: 200,
      categoryId: 1,
      productDetails:
        'lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem  lorem lorem lorem lorem lorem lorem  ',
    },
    {
      productId: 2,
      productName: 'Samsung Galaxy A16', 
      productImgUrl:
        'https://f.nooncdn.com/p/pnsku/N70030440V/45/_/1702699238/6ae73ece-d29e-4a81-ba41-850055d0937f.jpg?format=avif&wproductIdth=240',
      productQuantity: 9,
      productPrice: 200,
      categoryId: 2,
      productDetails:
        'lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem  lorem lorem lorem lorem lorem lorem  ',
    },
    {
      productId: 3,
      productName: 'Apple iPhone 13',
      productImgUrl:
        'https://f.nooncdn.com/p/v1686205682/N50838986A_1.jpg?format=avif&wproductIdth=240',
      productQuantity: 0,
      productPrice: 100,
      categoryId: 1,
      productDetails:
        'lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem  lorem lorem lorem lorem lorem lorem  ',
    },
    {
      productId: 4,
      productName: 'Samsung Galaxy S24 Ultra',
      productImgUrl:
        'https://f.nooncdn.com/p/pnsku/N70035206V/45/_/1712239207/3e7c97e2-cf7d-48ee-b324-a5d4aa30efe8.jpg?format=avif&wproductIdth=240',
      productQuantity: 1,
      productPrice: 400,
      categoryId: 2,
      productDetails:
        'lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem  lorem lorem lorem lorem lorem lorem  ',
    },
    {
      productId: 5,
      productName: 'OPPO Reno 12F 5G ',
      productImgUrl:
        'https://f.nooncdn.com/p/pnsku/N70093960V/45/_/1721457134/54d5b998-81c6-4fdd-9b0e-eca01f6979b7.jpg?format=avif&wproductIdth=240',
      productQuantity: 5,
      productPrice: 100,
      categoryId: 3,
      productDetails:
        'lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem  lorem lorem lorem lorem lorem lorem  ',
    },
    {
      productId: 6,
      productName: 'Nokia C22 Plus',
      productImgUrl:
        'https://f.nooncdn.com/p/v1640152217/N52217824A_1.jpg?format=avif&wproductIdth=240',
      productQuantity: 0,
      productPrice: 200,
      categoryId: 4,
      productDetails:
        'lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem  lorem lorem lorem lorem lorem lorem  ',
    },
    {
      productId: 7,
      productName: 'Samsung Galaxy Z Flip4',
      productImgUrl:
        'https://f.nooncdn.com/p/pnsku/N70085224V/45/_/1721894952/91270228-e30b-484e-ae2a-3e746b194bb2.jpg?format=avif&wproductIdth=240',
      productQuantity: 16,
      productPrice: 270,
      categoryId: 1,
      productDetails:
        'lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem  lorem lorem lorem lorem lorem lorem  ',
    },
    {
      productId: 8,
      productName: 'Reno 11F',
      productImgUrl:
        'https://f.nooncdn.com/p/pnsku/N70063654V/45/_/1713704986/b06f55f9-03d1-4021-8b06-da23bc27e60d.jpg?format=avif&wproductIdth=240',
      productQuantity: 0,
      productPrice: 200,
      categoryId: 3,
      productDetails:
        'lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem  lorem lorem lorem lorem lorem lorem  ',
    },
    {
      productId: 9,
      productName: 'Nokia C21 Plus',
      productImgUrl:
        'https://f.nooncdn.com/p/v1640152217/N52217824A_1.jpg?format=avif&wproductIdth=240',
      productQuantity: 1,
      productPrice: 200,
      categoryId: 4,
      productDetails:
        'lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem  lorem lorem lorem lorem lorem lorem  ',
    },
    ];
  }

  buy(product: IProduct) {
    if (product.productQuantity > 0) {
      product.productQuantity--;
    }
    this.IsPurshased = true;
  }

  get filteredProducts(): IProduct[] {
    if (this.selectedCategoryID == 0) {
      return this.ProductList;
    } else {
      return this.ProductList.filter(p => p.categoryId == this.selectedCategoryID);
    }
  }
}