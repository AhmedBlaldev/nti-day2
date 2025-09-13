import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css'],
})
export class ProductCardComponent {
  @Input() name: string = '';
  @Input() price: number = 0;

  @Output() productUpdate = new EventEmitter<{ name: string; price: number }>();

  localName: string = '';
  localPrice: number = 0;

  ngOnInit() {
    this.localName = this.name;
    this.localPrice = this.price;
  }

  ngOnChanges() {
    this.localName = this.name;
    this.localPrice = this.price;
  }

  updateProduct() {
    this.productUpdate.emit({
      name: this.localName,
      price: this.localPrice,
    });
  }

  resetProduct() {
    this.localName = 'Default Product';
    this.localPrice = 0;
    this.updateProduct();
  }

  getPriceCategory(): string {
    if (this.localPrice < 500) return 'cheap';
    if (this.localPrice <= 2000) return 'standard';
    return 'premium';
  }

  isHighPrice(): boolean {
    return this.localPrice > 2000;
  }
}
