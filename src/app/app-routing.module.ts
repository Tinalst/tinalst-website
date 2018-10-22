import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'home', loadChildren:'./home/home.module#HomeModule'}
];


@NgModule({
  imports: [RouterModule.forRoot(
      routes,
      {
          enableTracing: true
      }
  )],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
