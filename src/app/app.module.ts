import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'

import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { CursosComponent } from './cursos/cursos.component';


import { RouterModule } from '@angular/router';
import { Error404Component } from './core/component/error404/error404.component';
import { CursoInfoComponent } from './curso-info/curso-info.component';
import { StarModule } from './shared/component/star/star.module';
import { CoreModule } from './core/core.module';


@NgModule({
  declarations: [
    AppComponent,
    CursosComponent,
   
    Error404Component,
    CursoInfoComponent

    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    StarModule,
    CoreModule,
    RouterModule.forRoot([
      {
        path: '', redirectTo: 'cursos',pathMatch: 'full'    
      },
      {
        path: 'cursos/info/:id', component: CursoInfoComponent
      },
      {
        path: 'cursos', component: CursosComponent
      },
      {
        path: '**', component: Error404Component
      }
    ]
      
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
