import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-empleado',
  templateUrl: './empleado.component.html',
  styleUrls: ['./empleado.component.css']
})
export class EmpleadoComponent implements OnInit {

  nombre: string = "Eyder";
  apellido: string = "Suarez"
  edad: number = 10;
  //private empresa: string = "Suarez Corporation";

  // llamaEmpresa(value:String){

  // }

  // getEmpresa () { //este metodo se utiliza para poder acceder a una propiedad cuando la protegemos con el metodo private
  //   return this.empresa;
  // }

  constructor() { }

  ngOnInit(): void {
  }

}
