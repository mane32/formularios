import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { PaisService } from '../../services/pais.service';
@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styleUrls: ['./template.component.css']
})
export class TemplateComponent implements OnInit {

  usuario = {
    nombre: 'Vannesa',
    apellido: 'Vega',
    correo: 'manelp3214@gmail.com',
    pais: '',
    genero: ''
  };

  paises: any[] = [];

  constructor( private PaisService: PaisService ) { }

  ngOnInit(): void {
    this.PaisService.getPaises()
    .subscribe( paises => {
      this.paises = paises;

      this.paises.unshift({
        nombre: ' (Seleccione Pais) ',
        codigo: ''
      });
  });

  }
  guardar( forma: NgForm ) {
    console.log( forma );

    if ( forma.invalid ) {

      Object.values( forma.controls ).forEach( control => {
        control.markAllAsTouched();

      });

      return;

    }

    console.log( forma.value );
  }
}
