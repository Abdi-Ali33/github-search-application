import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes} from '@angular/router';
import { GitsearchComponent } from '../gitsearch/gitsearch.component';

const routes:Routes = [
  {path:"gitsearch",component:GitsearchComponent},
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports:[RouterModule],
  declarations: []
})
export class RoutingModule {} 