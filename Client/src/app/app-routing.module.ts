import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [RouterModule.forRoot([])], // Elimina las rutas vacías
  exports: [RouterModule]
})
export class AppRoutingModule { }
