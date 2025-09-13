import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Store } from '../../Models/store';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  storeInfo: Store;

  constructor() {
    this.storeInfo = new Store(
      'NTI Tech Store',
      ['Cairo', 'Alexandria'],
      'assets/images/ntiLogo.png'
    );
  }
}
