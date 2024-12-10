import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoryListComponent } from './components/category-list/category-list.component';
import { CategoryAddComponent } from './components/category-add/category-add.component';
import { CategoryUpdateComponent } from './components/category-update/category-update.component';

const routes: Routes = [
  
  {
    path:'category-add',
    component:CategoryAddComponent
  },
  {
    path:'category-list',
    component:CategoryListComponent
  },
  {
    path:'category-update',
    component:CategoryUpdateComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
