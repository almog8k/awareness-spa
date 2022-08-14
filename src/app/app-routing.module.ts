import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home/home.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  // {
  //   // path: '',
  //   // runGuardsAndResolvers: 'always',
  //   // canActivate: [AuthGuard],
  //   // children: [
  //   //   { path: 'members', component: MemberListComponent, resolve: { users: MemberListResolver } },
  //   //   { path: 'members/:id', component: MemberDetailComponent, resolve: { user: MemberDetailResolver } },
  //   //   { path: 'messages', component: MessagesComponent },
  //   //   { path: 'lists', component: ListsComponent }
  //   // ]
  // },
  { path: '**', redirectTo: '', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
