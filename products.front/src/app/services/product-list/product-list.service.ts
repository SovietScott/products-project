import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Products } from 'src/app/models/products';
import { delay, pipe , take } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductListService {
  private readonly API = '/assets/data-set-example.json'; // ou '/assets/data-set-example.json'

  constructor(private http: HttpClient) {}

  list(){
    return this.http.get<Products[]>(this.API)
    .pipe(
      take(1),
      delay(5000)
    );
  }

}
