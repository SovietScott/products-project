import { Component, Input, OnInit } from '@angular/core';
import { ProductListService } from '../services/product-list/product-list.service';
import { ErrorComponent } from '../shared/error/error.component';
import { Products } from '../models/products';
import { Observable, catchError, of } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit{
  @Input() PRODUCTS_DATA$ : Observable<Products[]> | null = null;

  displayedColumns: string[] = ['id','name','description','price', 'actions'];

  constructor(private productsList : ProductListService, 
    public error : ErrorComponent, private router : Router,
    private route : ActivatedRoute){
    this.refresh();
  };

  refresh(){
    this.PRODUCTS_DATA$ = this.productsList.listAll()
    .pipe( catchError(() => {
      this.onError('Erro ao carregar produtos')
      return of([]);
    }))
  }

  onAdd(){
    this.router.navigate(['new'], {relativeTo: this.route});
  }

  onEdit(id : string){
    // this.router.navigate([`edit/${id}`], {relativeTo: this.route})
  }

  onCall(type : string) : Observable<Products[]> | null | void{
    if (type === 'DELETE'){
      return this.PRODUCTS_DATA$ = this.productsList.deleteAll()
      .pipe( catchError(() => {
        this.onError('Erro ao deletar lista de produtos')
        return of([]);
      }));
    }
    else if (type === 'PATCH'){
      return this.PRODUCTS_DATA$ = this.productsList.resetAll()
      .pipe( catchError(() => {
        this.onError('Erro ao reinicializar lista de produtos')
        return of([]);
      }));
    }
    else{
      return of([]);
    }
  }
  
  onError(message : string){
    this.error.open(message);
  }

  ngOnInit(): void {}
}
