import { Component, OnInit } from '@angular/core';
import { Category } from 'src/app/models/category';
import { CategoryService } from '../category.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.css']
})
export class CategoryListComponent implements OnInit {

  categories!:Category[];

  constructor(private categoryService:CategoryService, private router:Router) {

  }

  getCategories() {
    this.categoryService.getAllCategories().subscribe({
      next: (response) => {
        this.categories = response;
      },
      error:(err) => {
        console.log(err);
      }
    })
  }

  ngOnInit(): void {
    this.getCategories();
  }

}
