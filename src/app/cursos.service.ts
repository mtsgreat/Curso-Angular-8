import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Cursos } from './cursos/cursos';

@Injectable({
  providedIn: 'root'
})
export class CursosService {

  private courseUrl: string = 'http://localhost:3100/api/courses';
 
  constructor(private httpCliente: HttpClient){}

  retrieveAll(): Observable<Cursos[]> {
    return this.httpCliente.get<Cursos[]>(this.courseUrl);
  }

  retrieveById(id: number): Observable<Cursos>{
    return this.httpCliente.get<Cursos>(`${this.courseUrl}/${id}`);
  }

  save(curso: Cursos): Observable<Cursos> {
    if(curso.id){
        return this.httpCliente.put<Cursos>(`${this.courseUrl}/${curso.id}`, curso);
    }else {
      return this.httpCliente.post<Cursos>(`${this.courseUrl}`, curso);
    }
  }


  deleteById(id: Number): Observable<any>{
    return this.httpCliente.delete<any>(`${this.courseUrl}/${id}`);
  }

}




var COURSES: Cursos[] = [
  {
      id: 1,
      name: 'Angular: CLI',
      data: 'November 2, 2019',
      duracao: 120,
      code: 'XLF-1212',
      avaliacao: 3,
      price: 12.99,
      imageUrl: '/assets/img/cli.png',
  },
  {
      id: 2,
      name: 'Angular: Forms',
      data: 'November 4, 2019',
      duracao: 80,
      code: 'DWQ-3412',
      avaliacao: 3.5,
      price: 24.99,
      imageUrl: '/assets/img/forms.png',
  },
  {
      id: 3,
      name: 'Angular: HTTP',
      data: 'November 8, 2019',
      duracao: 80,
      code: 'QPL-0913',
      avaliacao: 4.0,
      price: 36.99,
      imageUrl: '/assets/img/http.png',
  },
  {
      id: 4,
      name: 'Angular: Router',
      data: 'November 16, 2019',
      duracao: 80,
      code: 'OHP-1095',
      avaliacao: 4.5,
      price: 46.99,
      imageUrl: '/assets/img/router.png',
  },
  {
      id: 5,
      name: 'Angular: Animations',
      data: 'November 25, 2019',
      duracao: 80,
      code: 'PWY-9381',
      avaliacao: 5,
      price: 56.99,
      imageUrl: '/assets/img/animations.png',
  }
];
