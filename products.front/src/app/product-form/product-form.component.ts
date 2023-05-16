import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ErrorComponent } from '../shared/error/error.component';
import { MAT_FORM_FIELD_DEFAULT_OPTIONS } from '@angular/material/form-field';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductListService } from '../services/product-list/product-list.service';
import { catchError, of } from 'rxjs';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.scss'],
  providers: [{
    provide: MAT_FORM_FIELD_DEFAULT_OPTIONS,
    useValue: { appearance: 'outline' }
  }]
})
export class ProductFormComponent implements OnInit {
  form: FormGroup;

  constructor(private formBuilder: FormBuilder, public error: ErrorComponent,
    private router: Router, private route: ActivatedRoute,
    private productsListService: ProductListService) {
    this.form = this.formBuilder.group({
      name: [null, [Validators.required, Validators.maxLength(50)]],
      description: [null, [Validators.required, Validators.maxLength(200)]],
      price: [null, [Validators.required, Validators.maxLength(6)]]
    });
  }

  onSave() {
    this.productsListService.save(this.form.value)
      .subscribe({
        next: (result) => {
          this.onError("Sucesso ao salvar produto");
        },
        error: (erro) => {
          this.onError("Erro ao salvar produto");
        }
      })
  }

  onDismiss() {
    this.router.navigate([''], { relativeTo: this.route })
  }

  onError(message: string) {
    this.error.open(message);
  }

  ngOnInit(): void { }
}
