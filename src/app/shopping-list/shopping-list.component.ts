import { Component } from '@angular/core';
import { Ingredient } from '../shared/Ingredient.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent {
ingredients:Ingredient[]  = [
  new Ingredient('aPPLES', 5),
  new Ingredient('Tomatoes', 10),

];
}
