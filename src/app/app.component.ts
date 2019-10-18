import {Component, OnInit} from '@angular/core';
import {DataService} from './services/data.service';
import {DataModel} from './models/data-model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  // productData: any;
  // cities: any;
  // categories: any;

  selected = 1;
  checked: any;
  selectedData: any;

  private Data: DataModel[] = [
    {id: 1, name: 'Name 1', city: 1, category: 2, price: 50},
    {id: 2, name: 'Name 2', city: 4, category: 1, price: 100},
    {id: 3, name: 'Name 3', city: 5, category: 1, price: 1},
    {id: 4, name: 'Name 4', city: 2, category: 4, price: 150},
    {id: 5, name: 'Name 5', city: 3, category: 5, price: 200}
  ];

  private City: DataModel[] = [
    {id: 1, name: 'City 1'},
    {id: 2, name: 'City 2'},
    {id: 3, name: 'City 3'},
    {id: 4, name: 'City 4'},
    {id: 5, name: 'City 5'},
  ];

  private Category: DataModel[] = [
    {id: 1, name: 'Category1'},
    {id: 2, name: 'Category2'},
    {id: 3, name: 'Category3'},
    {id: 4, name: 'Category4'},
    {id: 5, name: 'Category5'},
  ];

  constructor(private dataService: DataService) {
    this.selectedData = this.Data;
  }

  ngOnInit() {
    // this.productListData();
    // this.cityData();
    // this.categoryData();
  }

  // productListData() {
  //   this.dataService.getProductListData().subscribe(data => {
  //     this.productData = data.Data;
  //   });
  // }
  //
  // cityData() {
  //   this.dataService.getCityData().subscribe(data => {
  //     this.cities = data.City;
  //   });
  // }
  //
  // categoryData() {
  //   this.dataService.getCategoryData().subscribe(data => {
  //     this.categories = data.Category;
  //   });
  // }

  selectCity(value) {
    this.selectedData = this.Data.filter(data => {
      console.log(value);
      return data.city == value;
    });
  }

  selectedCategory() {
  }
}
