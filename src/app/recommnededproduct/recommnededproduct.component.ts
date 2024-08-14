import { Component } from '@angular/core';
import { Product } from '../../product/product';
@Component({
  selector: 'app-recommnededproduct',
  standalone: true,
  imports: [],
  templateUrl: './recommnededproduct.component.html',
  styleUrl: './recommnededproduct.component.css'
})
export class RecommnededproductComponent {

  productList : Product[] = [
    {pName: "WATCK", pImg:"assets/img/4.jpg", pfooter:"300$"},
    {pName: "BOOK", pImg:"assets/img/5.jpg", pfooter:"100$"},
    {pName: "PAPER", pImg:"assets/img/6.jpg", pfooter:"50$"},

    {pName: "WATCK", pImg:"assets/img/4.jpg", pfooter:"300$"},
    {pName: "BOOK", pImg:"assets/img/5.jpg", pfooter:"100$"},
    {pName: "PAPER", pImg:"assets/img/6.jpg", pfooter:"50$"},

    {pName: "WATCK", pImg:"assets/img/4.jpg", pfooter:"300$"},
    {pName: "BOOK", pImg:"assets/img/5.jpg", pfooter:"100$"},
    {pName: "PAPER", pImg:"assets/img/6.jpg", pfooter:"50$"},

    {pName: "WATCK", pImg:"assets/img/4.jpg", pfooter:"300$"},
    {pName: "BOOK", pImg:"assets/img/5.jpg", pfooter:"100$"},
    {pName: "PAPER", pImg:"assets/img/6.jpg", pfooter:"50$"},

    {pName: "WATCK", pImg:"assets/img/4.jpg", pfooter:"300$"},
    {pName: "BOOK", pImg:"assets/img/5.jpg", pfooter:"100$"},
    {pName: "PAPER", pImg:"assets/img/6.jpg", pfooter:"50$"},

    {pName: "WATCK", pImg:"assets/img/4.jpg", pfooter:"300$"},
    {pName: "BOOK", pImg:"assets/img/5.jpg", pfooter:"100$"},
    {pName: "PAPER", pImg:"assets/img/6.jpg", pfooter:"50$"},
    {pName: "WATCK", pImg:"assets/img/4.jpg", pfooter:"300$"},
    {pName: "BOOK", pImg:"assets/img/5.jpg", pfooter:"100$"},
    {pName: "PAPER", pImg:"assets/img/6.jpg", pfooter:"50$"},


    {pName: "WATCK", pImg:"assets/img/4.jpg", pfooter:"300$"},
    {pName: "BOOK", pImg:"assets/img/5.jpg", pfooter:"100$"},
    {pName: "PAPER", pImg:"assets/img/6.jpg", pfooter:"50$"},
  ]
}
