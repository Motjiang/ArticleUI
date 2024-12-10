import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Category } from 'src/app/models/category';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  private API_endPoint = environment.baseUrl + '/Category';

  constructor(private http:HttpClient) {

   }

   addCategory(category:Category) {
    return this.http.post(this.API_endPoint + '/add', category);
   }

   getAllCategories() {
    return this.http.get<Category[]>(this.API_endPoint + '/all');
   }

   getSingleCategory(id:number) {
    return this.http.get<Category>(this.API_endPoint + '/get-single/' + id);
   }

   updateCategory(category:Category) {
    return this.http.put(this.API_endPoint + '/update', category);
   }

   deleteCategory(id:number) {
    return this.http.delete(this.API_endPoint + '/delete/' + id);
   }
}
