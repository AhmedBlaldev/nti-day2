import { Component, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ProductCardComponent } from '../product-card/product-card.component';

@Component({
  selector: 'app-shop',
  standalone: true,
  imports: [CommonModule, FormsModule, ProductCardComponent],
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css'],
})
export class ShopComponent {
  @ViewChild(ProductCardComponent) productCard!: ProductCardComponent;

  productName: string = 'Nike Shoes';
  productPrice: number = 1200;

  onProductUpdate(updatedProduct: { name: string; price: number }) {
    this.productName = updatedProduct.name;
    this.productPrice = updatedProduct.price;
    console.log('Product updated from child:', updatedProduct);
  }

  resetProductCard() {
    this.productCard.resetProduct();
  }
}
