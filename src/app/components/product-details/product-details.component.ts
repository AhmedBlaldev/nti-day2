import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { IProduct } from '../../Models/iproduct';

@Component({
  selector: 'app-product-details',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css'],
})
export class ProductDetailsComponent implements OnInit {
  product: IProduct | undefined;
  ProductList: IProduct[] = [
    {
      productId: 1,
      productName: 'Apple iPhone 15',
      productImgUrl:
        'https://f.nooncdn.com/p/pnsku/N53432547A/45/_/1694762192/fd45d583-8af9-4ff3-8032-af4a5a3c553c.jpg?format=avif&wproductIdth=240',
      productQuantity: 20,
      productPrice: 200,
      categoryId: 1,
      productDetails:
        'The all-new Apple iPhone 15 features a stunning 6.1-inch Super Retina XDR display and advanced 48MP Pro camera with optical zoom. Powered by the A17 Pro chip with all-day battery life and fast charging support.',
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
        'Samsung Galaxy A16 with 6.5-inch Super AMOLED display and triple 50MP camera. Features powerful processor and large storage with 5000mAh battery.',
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
        'Apple iPhone 13 with Super Retina XDR display and dual 12MP camera system. Features A15 Bionic chip with elegant design and water resistance.',
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
        'Samsung Galaxy S24 Ultra flagship with 6.8-inch Dynamic AMOLED 2X display and 200MP camera. Includes S Pen and Snapdragon 8 Gen 3 processor.',
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
        'OPPO Reno 12F 5G with elegant design and advanced camera for capturing the best photos. Supports 5G network for ultra-fast speed with fast charging and excellent performance.',
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
        'Nokia C22 Plus with durable design and long-lasting battery. Features pure Android system with regular security updates.',
    },
    {
      productId: 7,
      productName: 'Samsung Galaxy Z Flip4',
      productImgUrl:
        'https://f.nooncdn.com/p/pnsku/N70085224V/45/_/1721894952/91270228-e30b-484e-ae2a-3e746b194bb2.jpg?format=avif&wproductIdth=240',
      productQuantity: 16,
      productPrice: 270,
      categoryId: 2,
      productDetails:
        'Samsung Galaxy Z Flip4 foldable phone with innovative design and Dynamic AMOLED display. Combines elegance with advanced technology in one device.',
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
        'OPPO Reno 11F with ultra-high-quality camera and powerful processor for smooth experience. Features elegant design and distinctive colors.',
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
        'Nokia C21 Plus economical and reliable phone with Android Go Edition. Provides good performance and long-lasting battery at an affordable price.',
    },
  ];

  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit() {
    const productId = Number(this.route.snapshot.paramMap.get('id'));
    this.product = this.ProductList.find((p) => p.productId === productId);

    if (!this.product) {
      this.router.navigate(['/products']);
    }
  }

  buy(product: IProduct) {
    if (product.productQuantity > 0) {
      product.productQuantity--;
    }
  }

  goBack() {
    this.router.navigate(['/products']);
  }
}
