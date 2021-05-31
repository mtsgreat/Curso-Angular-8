import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CursosService } from '../cursos.service';
import { Cursos } from '../cursos/cursos';

@Component({
  selector: 'app-curso-info',
  templateUrl: './curso-info.component.html',

})
export class CursoInfoComponent implements OnInit {

  curso: Cursos;

  constructor(private ActivatedRoute: ActivatedRoute, private courseService: CursosService) { }

  ngOnInit(): void {
     this.courseService.retrieveById( +this.ActivatedRoute.snapshot.paramMap.get('id')).subscribe({
       next: curso => this.curso = curso,
       error: err => console.log('Error', err)
     })
  }

  save(): void {
    this.courseService.save(this.curso).subscribe({
      next: couse => console.log('Salvo com sucesso!', couse),
      error: err => console.log('Error', err)
      
    })
    this.notificacao()s
  }

  notificacao(){
    alert("Alteração realizada com sucesso!!")
  }

}
