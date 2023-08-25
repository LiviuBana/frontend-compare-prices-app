import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProducerModelsComponent } from './producer-models/producer-models.component';
import { AppComponent } from './app.component';

const routes: Routes = [
  {path:'home',component: AppComponent },
  {path:'models/:producer', component: ProducerModelsComponent},
  {path:'',redirectTo:'/home',pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
