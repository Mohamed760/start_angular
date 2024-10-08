import { Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { ContactComponent } from './contact/contact.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { ProudctlisyComponent } from './proudctlisy/proudctlisy.component';

export const routes: Routes = [
    {path : "", redirectTo : "about", pathMatch : "full"},
    {path: "about", component: AboutComponent},
    {path: "portfolio", component: PortfolioComponent},
    {path: "contact", component: ContactComponent},
    {path: "productlist", component: ProudctlisyComponent},
    {path : "**", component: NotfoundComponent},
];
