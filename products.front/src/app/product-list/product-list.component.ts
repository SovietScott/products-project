import { Component, OnInit, ViewChild } from '@angular/core';
import { ProductListService } from '../services/product-list/product-list.service';
import { ErrorComponent } from '../shared/error/error.component';
import { Products } from '../models/products';
import { Observable, catchError, of } from 'rxjs';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit{
  protected PRODUCTS_DATA$ : Observable<Products[]>;
  displayedColumns: string[] = ['id','name','description','price'];

  constructor(private productsList : ProductListService, public error : ErrorComponent){
    this.PRODUCTS_DATA$ = this.productsList.list()
    .pipe( catchError(error => {
      this.onError(error.message)
      return of([]);
    }));
    
  };
  
  onError(message : string){
    this.error.open(message);
  }

  ngOnInit(): void {
    
  }

}
