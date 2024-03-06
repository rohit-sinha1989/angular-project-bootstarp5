import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BootstrapMessageComponent } from './component/bootstrap-message/bootstrap-message.component';

const routes: Routes = [
  {
    path:"", component:BootstrapMessageComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
