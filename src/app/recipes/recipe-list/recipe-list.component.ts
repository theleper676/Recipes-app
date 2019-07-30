import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('Test 1', 'Description of test 1', 'https://www.jessicagavin.com/wp-content/uploads/2019/01/baked-salmon-8.jpg')
  ];
  constructor() { }

  ngOnInit() {
  }

}
