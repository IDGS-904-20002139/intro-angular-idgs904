import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { EscuelaComponent } from './escuela/escuela.component';
import { IvnComponent } from './ivn/ivn.component';
import { IricComponent } from './escuela/iric/iric.component';
import { MenuComponent } from './escuela/menu/menu.component';
import { FormsModule } from '@angular/forms';
import { SumarComponent } from './escuela/formularios/sumar/sumar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { OperasModule } from './escuela/formularios/operas/operas.module';

@NgModule({
  declarations: [
    AppComponent,
    EscuelaComponent,
    IvnComponent,
    IricComponent,
    MenuComponent,
    SumarComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    OperasModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
