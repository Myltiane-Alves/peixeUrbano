import { Component, OnInit } from '@angular/core';
import { OfertasService } from '../ofertas.service';

@Component({
  selector: 'app-restaurantes',
  templateUrl: './restaurantes.component.html',
  styleUrls: ['./restaurantes.component.css']
})
export class RestaurantesComponent implements OnInit {

  // public ofertas: Oferta[]
  constructor(private ofertasService: OfertasService) { }

  ngOnInit(): void {

  }

}
