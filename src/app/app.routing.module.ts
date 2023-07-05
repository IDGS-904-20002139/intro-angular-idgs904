import { RouterModule, Routes } from "@angular/router";
import { NgModule } from "@angular/core";
import { IricComponent } from "./escuela/iric/iric.component";
import { AlumnosReactiveComponent } from "./formularios/alumnos-reactive/alumnos-reactive.component";
import { OperasBasComponent } from "./escuela/formularios/operas-bas/operas-bas.component";

const routes: Routes = [
    {path: '', redirectTo: '/home', pathMatch: 'full'},
    {path: 'IricComponent', component: IricComponent},
    {path: 'OperasBasComponent', component: OperasBasComponent},
    {path: 'AlumnosReactiveComponent', component: AlumnosReactiveComponent}
]

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule{}