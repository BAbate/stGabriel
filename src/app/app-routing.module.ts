import { ContactComponent } from './contact/contact.component';
import { MultimediaComponent } from './multimedia/multimedia.component';
import { ServicesComponent } from './services/services.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AboutComponent } from './about/about.component';
import { MembershipComponent } from './membership/membership.component';
import { CalendarComponent } from './calendar/calendar.component';

const routes: Routes = [
  {path:'home', component : HomeComponent },
  {path:'about', component : AboutComponent },
  {path:'services', component : ServicesComponent },
  {path:'multimedia', component : MultimediaComponent },
  {path:'membership', component : MembershipComponent },
  {path:'calendar', component : CalendarComponent },
  {path:'contact', component : ContactComponent},
  {path: '',   redirectTo: '/home', pathMatch: 'full' },
  {path:'**', component: PageNotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
