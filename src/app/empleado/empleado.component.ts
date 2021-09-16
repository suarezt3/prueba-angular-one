import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-empleado',
  templateUrl: './empleado.component.html',
  styleUrls: ['./empleado.component.css']
})
export class EmpleadoComponent implements OnInit {

  title: string = ""

  nombre: string = "Eyder";
  apellido: string = "Suarez"
  edad: number = 10;

  taskList: string[] = ['Estudiar angular', 'Ver SQL', 'Estudiar Angular']

  deleteItem(index: number) {
    this.taskList.splice(index, 1)
  }

  // title: string = ""
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
