import { Component } from '@angular/core';
import { LineComponent } from "../line/line.component";
import { FooterComponent } from "../footer/footer.component";
interface Card {
  img : string;
}

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [LineComponent, FooterComponent],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.css'
})
export class PortfolioComponent {
  cardList : Card[] = [
    {img: "assets/img/asset 0.png"},
    {img: "assets/img/asset 1.png"},
    {img: "assets/img/asset 2.png"},
  ] 
}
