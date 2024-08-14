import { Component } from '@angular/core';
import { Product } from '../../product/product';
import { RecommnededproductComponent } from "../recommnededproduct/recommnededproduct.component";
@Component({
  selector: 'app-proudctlisy',
  standalone: true,
  imports: [RecommnededproductComponent],
  templateUrl: './proudctlisy.component.html',
  styleUrl: './proudctlisy.component.css'
})
export class ProudctlisyComponent {

  productList : Product[]  = [
    {pName: "LAMBOREGENI", pImg: "assets/img/lambo.jpg", pfooter: "22500$"},
    {pName: "BMW", pImg: "assets/img/bmw.jpg", pfooter: "12500$"},
    {pName: "MERCIDES", pImg: "assets/img/merc.jpg", pfooter: "32500$"},

    {pName: "LAMBOREGENI", pImg: "assets/img/lambo.jpg", pfooter: "22500$"},
    {pName: "BMW", pImg: "assets/img/bmw.jpg", pfooter: "12500$"},
    {pName: "MERCIDES", pImg: "assets/img/merc.jpg", pfooter: "32500$"},

    {pName: "LAMBOREGENI", pImg: "assets/img/lambo.jpg", pfooter: "22500$"},
    {pName: "BMW", pImg: "assets/img/bmw.jpg", pfooter: "12500$"},
    {pName: "MERCIDES", pImg: "assets/img/merc.jpg", pfooter: "32500$"},

    {pName: "LAMBOREGENI", pImg: "assets/img/lambo.jpg", pfooter: "22500$"},
    {pName: "BMW", pImg: "assets/img/bmw.jpg", pfooter: "12500$"},
    {pName: "MERCIDES", pImg: "assets/img/merc.jpg", pfooter: "32500$"},

    {pName: "LAMBOREGENI", pImg: "assets/img/lambo.jpg", pfooter: "22500$"},
    {pName: "BMW", pImg: "assets/img/bmw.jpg", pfooter: "12500$"},
    {pName: "MERCIDES", pImg: "assets/img/merc.jpg", pfooter: "32500$"},
  ]

}
