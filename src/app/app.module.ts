import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { EscuelaComponent } from './escuela/escuela.component';
import { IvnComponent } from './ivn/ivn.component';
import { IricComponent } from './escuela/iric/iric.component';
import { MenuComponent } from './escuela/menu/menu.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SumarComponent } from './escuela/formularios/sumar/sumar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { OperasModule } from './escuela/formularios/operas/operas.module';
import { AlumnosFilterPipe } from './escuela/alumnos-filter.pipe';
import { CalificacionAlumComponent } from './escuela/calificacion-alum/calificacion-alum.component';
import { AlumnosReactiveComponent } from './formularios/alumnos-reactive/alumnos-reactive.component';

@NgModule({
  declarations: [
    AppComponent,
    EscuelaComponent,
    IvnComponent,
    IricComponent,
    MenuComponent,
    SumarComponent,
    AlumnosFilterPipe,
    CalificacionAlumComponent,
    AlumnosReactiveComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    OperasModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
