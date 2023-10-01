import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContactComponent } from './pages/contact/contact.component';
import { AboutComponent } from './pages/about/about.component';
import { RegisterComponent } from './pages/register/register.component';
import { ViewComponent } from './pages/view/view.component';
import { WelcomesComponent } from './pages/welcomes/welcomes.component';
import { TreeViewComponent } from './pages/tree-view/tree-view.component';
const routes: Routes = [
 // { path: 'pages/welcomes', pathMatch: 'full', redirectTo: '/pages/welcomes' },
  //{ path: 'welcome', loadChildren: () => import('./pages/welcome/welcome.module').then(m => m.WelcomeModule) },
  { path: '', component: WelcomesComponent },
  { path: 'pages/welcomes', component: WelcomesComponent },
  { path: 'pages/contact', component: ContactComponent },
  { path: 'pages/about', component: AboutComponent},
  { path: 'pages/register', component: RegisterComponent},
  { path: 'pages/view', component: ViewComponent},
  { path: 'pages/tree-view', component: TreeViewComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
