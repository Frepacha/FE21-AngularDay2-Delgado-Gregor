import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PetListComponent } from './pet-list/pet-list.component';
import { PetDetailsComponent } from './pet-details/pet-details.component';
import { CartComponent } from './cart/cart.component';

const routes: Routes = [{
  path: '', component: PetListComponent
},
{
  path: 'pets/:petId', component: PetDetailsComponent
},
{
  path: 'cart', component: CartComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
