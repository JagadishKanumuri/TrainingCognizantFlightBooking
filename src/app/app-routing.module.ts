import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SearchFlightComponent } from './search/search-flight/search-flight.component';


// welcome 
const routes: Routes = [
  { path: '/', component:SearchFlightComponent   },//canActivate, RouteGuardService
//   { path: 'login', component: LoginComponent },
//   { path: 'welcome/:name', component: WelcomeComponent, canActivate:[RouteGuardService]},
//   { path: 'todos', component: ListTodosComponent, canActivate:[RouteGuardService] },
//   { path: 'logout', component: LogoutComponent, canActivate:[RouteGuardService] },
//   { path: 'todos/:id', component: TodoComponent, canActivate:[RouteGuardService] },

  { path: '**', component: SearchFlightComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
