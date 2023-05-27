import { Component } from '@angular/core';
import { CarrouselComponent } from './carrousel/carrousel.component';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss',]
})
export class AppComponent {
  constructor (private modalService: NgbModal){
  }

  public open(modal: any): void{
    this.modalService.open(modal);
  }
[x: string]: any;
  title = 'TT-PaginaWeb';
}
