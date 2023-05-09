import { Component, OnInit} from '@angular/core';
import { ProductListService } from '../services/product-list/product-list.service';
import { ErrorComponent } from '../shared/error/error.component';
import { Products } from '../models/products';
import { EMPTY, Observable, catchError, of } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit{
  protected PRODUCTS_DATA$ : Observable<Products[]>;
  displayedColumns: string[] = ['id','name','description','price', 'actions'];

  constructor(private productsList : ProductListService, 
    public error : ErrorComponent, private router : Router,
    private route : ActivatedRoute){
    this.PRODUCTS_DATA$ = this.productsList.listAll()
    .pipe( catchError(error => {
      this.onError(error.message)
      return of([]);
    }));
    
  };

  onAdd(){
    this.router.navigate(['new'], {relativeTo: this.route});
  }

  onCall(type : string) : Observable<Products[]> | null{
    if (type === 'DELETE'){
      this.productsList.deleteAll()
      return this.PRODUCTS_DATA$ = of([]);
    }
    else if (type === 'PATCH'){
      return this.PRODUCTS_DATA$ = this.productsList.resetAll()
      .pipe( catchError(error => {
        this.onError(error.message)
        return of([]);
      }));
    }
    return null;
  }
  
  onError(message : string){
    this.error.open(message);
  }

  ngOnInit(): void {
  }

}
