import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailsComponent } from './details/details.component';
import { EditComponent } from './edit/edit.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { UserdetailsComponent } from './userdetails/userdetails.component';

const routes: Routes = [
  {
    path:"",
    component:UserdetailsComponent,
  },
  {
    path:"userdetails",
    component:UserdetailsComponent,
  },
  {
    path:"edit/:id",
    component:EditComponent,
  },
  {
    path:"details/:id",
    component:DetailsComponent,
  },
  {
    path:'userdetails' , loadChildren: () => import('./userdetails/userdetails.module').then(m => m.UserdetailsModule)
  },
  {
    path:"**",
    component:PagenotfoundComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
