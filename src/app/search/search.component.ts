import { Component, OnInit } from '@angular/core';
import { SearchService } from './search.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  searchCriteria: any = {};
  products: any = [];

  constructor(private searchService: SearchService) { }

  ngOnInit() {
    this.findProductsByCategory();
  }

  findProductsByCategory() {
    this.searchCriteria.name = 'Laptop Acer Aspire E 15',
    this.searchCriteria.description = '15.6 Full HD, 8th Gen Intel Core i3-8130U, 6GB RAM Memory, 1TB HDD, 8X DVD, E5-576-392H';
    this.searchCriteria.rating = '4.5';
    this.searchCriteria.category = 'Laptops';
    this.searchCriteria.price = 359.99;
    this.searchService.findProductsByCategory(this.searchCriteria).then((data) => {
      this.populateProductsDataTable(data);
    })
  }

  findProductsByName() {
    this.searchCriteria.name = 'Laptop Acer Aspire E 15',
    this.searchCriteria.description = '15.6 Full HD, 8th Gen Intel Core i3-8130U, 6GB RAM Memory, 1TB HDD, 8X DVD, E5-576-392H';
    this.searchCriteria.rating = '4.5';
    this.searchCriteria.category = 'Laptops';
    this.searchCriteria.price = 359.99;
    this.searchService.findProductsByName(this.searchCriteria).then((data) => {
      this.populateProductsDataTable(data);
    })
  }

  findProductsByRating() {
    this.searchCriteria.name = 'Laptop Acer Aspire E 15',
    this.searchCriteria.description = '15.6 Full HD, 8th Gen Intel Core i3-8130U, 6GB RAM Memory, 1TB HDD, 8X DVD, E5-576-392H';
    this.searchCriteria.rating = '4.5';
    this.searchCriteria.category = 'Laptops';
    this.searchCriteria.price = 359.99;
    this.searchService.findProductsByName(this.searchCriteria).then((data) => {
      this.populateProductsDataTable(data);
    })
  }

  findProductsUnderGivenPrice() {
    this.searchCriteria.name = 'Laptop Acer Aspire E 15',
    this.searchCriteria.description = '15.6 Full HD, 8th Gen Intel Core i3-8130U, 6GB RAM Memory, 1TB HDD, 8X DVD, E5-576-392H';
    this.searchCriteria.rating = '4.5';
    this.searchCriteria.category = 'Laptops';
    this.searchCriteria.price = 359.99;
    this.searchService.findProductsByName(this.searchCriteria).then((data) => {
      this.populateProductsDataTable(data);
    })
  }      
  
  public populateProductsDataTable(data: any) {
    this.products = data; //Data to display in a data table or some other UI container
  }

}
