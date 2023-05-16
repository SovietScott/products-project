import { OnInit, NgZone, Directive} from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Directive({selector: 'app-error'})
export class ErrorComponent implements OnInit{
  constructor(private snackbar : MatSnackBar, private zone: NgZone){}

  public open(message : string, action : string = 'Remover Aviso'): void{
    this.zone.run( () => this.snackbar.open(message,action))
  };

  ngOnInit(): void {}
}
