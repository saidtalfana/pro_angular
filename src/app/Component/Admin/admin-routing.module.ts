import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardAdminComponent } from './dashboard-admin/dashboard-admin.component';
import { AddArticleComponent } from './add-article/add-article.component';
import { ShowArticleComponent } from './show-article/show-article.component';
import { AllContactComponent } from './all-contact/all-contact.component';

const routes: Routes = [
  { path: '', component: DashboardAdminComponent,
    children:[
  { path: 'add_article', component: AddArticleComponent },
  { path: 'show_article', component: ShowArticleComponent },
  { path: 'all_contact', component: AllContactComponent },
  { path: 'edit-article/:id', component: AddArticleComponent}]},



  { path: '', redirectTo: '/admin', pathMatch: 'full' },
    { path: '**', redirectTo: '/admin' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
