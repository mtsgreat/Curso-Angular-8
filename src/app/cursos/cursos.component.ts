import { Component, OnInit } from '@angular/core';
import { CursosService } from '../cursos.service';
import { Cursos } from './cursos';

@Component({
  selector: 'cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css']
})
export class CursosComponent implements OnInit {

  _cursos: Cursos[] = []

  _filtroDeCursos: Cursos[] = []
  
  _filterBy: string

  constructor(private cursosService : CursosService) { }


  ngOnInit(): void {
   this.retrieveAll()
   
  }



  retrieveAll(): void {
    this.cursosService.retrieveAll().subscribe({
      next: courses => {
        this._cursos = courses;
        this._filtroDeCursos = this._cursos
      },
      error: err => console.log('Error', err)
    })
   }


   deleteById(courseId: Number): void{
      this.cursosService.deleteById(courseId).subscribe({
        next: () => {
          console.log("Deletado com Sucesso!!");
          this.retrieveAll()
        },
        error: er => console.log("Error", er)
      })
   }


 


  set filtro(valor: string){
      this._filterBy = valor

      this._filtroDeCursos = this._cursos.filter((curso: Cursos) => curso.name.toLowerCase().indexOf(this._filterBy.toLowerCase()) > -1)
  }

  get filtro(){
    return this._filterBy
  }

}
