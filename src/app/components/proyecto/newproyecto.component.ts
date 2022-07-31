import { Component, OnInit } from '@angular/core';
import { ProyectoService } from 'src/app/service/proyecto.service';
import { Proyecto } from 'src/app/model/proyecto';
import { Router } from '@angular/router';


@Component({
  selector: 'app-newproyecto',
  templateUrl: './newproyecto.component.html',
  styleUrls: ['./newproyecto.component.scss']
})
export class NewproyectoComponent implements OnInit {
  nombreE: string;
  descripcionE: string;

  constructor(private proyectoS: ProyectoService, private router: Router) { }

  ngOnInit(): void {
  }

  onCreate(): void{
    const proyecto = new Proyecto(this.nombreE, this.descripcionE);
    this.proyectoS.save(proyecto).subscribe(
      data =>{
        alert("Proyecto añadido correctamente");
        this.router.navigate(['']);
      }, err =>{
        alert("falló");
        this.router.navigate(['']);
      }
    )
  }

}