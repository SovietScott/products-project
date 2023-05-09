import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Products } from 'src/app/models/products';
import { delay, pipe , take } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductListService {
  private readonly API = 'api/products'; // ou '/assets/data-set-example.json'
  private body = {}
  private options = {
    headers: new HttpHeaders({
      "Content-Type": "application/json",
    }),
  };

  constructor(private http: HttpClient) {}

  listAll(){
    return this.http.get<Products[]>(this.API)
    .pipe(
      take(1),
      delay(5000)
    );
  }

  deleteAll(){
    return this.http.delete<Products[]>(this.API)
  }

  resetAll(){
    return this.http.patch<Products[]>(this.API, this.body, this.options) 
    .pipe(
      take(1)
    );
  }

}
