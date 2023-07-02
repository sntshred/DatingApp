import { TestErrorComponent } from './errors/test-error/test-error.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MemberListComponent } from './members/member-list/member-list.component';
import { MemberDetailsListComponent } from './members/member-details-list/member-details-list.component';
import { ListComponent } from './list/list.component';
import { MessagesComponent } from './messages/messages.component';
import { AuthGuard } from './_guards/auth.guard';
import { NotFoundComponent } from './errors/not-found/not-found.component';
import { ServerErrorComponent } from './errors/server-error/server-error.component';

const routes: Routes = [
  { "path":"", component:HomeComponent},
  {
    path:"",
    runGuardsAndResolvers:'always',
    canActivate:[AuthGuard],
    children:[
      { "path":"members", component:MemberListComponent, canActivate:[AuthGuard]},
      { "path":"members/:username", component:MemberDetailsListComponent},
      { "path":"lists", component:ListComponent},
      { "path":"messages", component:MessagesComponent} ,
    ]
  },
  { "path":"errors", component:TestErrorComponent},
  { "path":"not-found", component:NotFoundComponent},
  { "path":"server-error", component:ServerErrorComponent},
  { "path":"**", component:NotFoundComponent,pathMatch:'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
