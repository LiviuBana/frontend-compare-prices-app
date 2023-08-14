import { Component, OnInit } from '@angular/core';
import { ItemsService } from './items/items.service';
import { ItemInterface } from './items/item.interface';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'angular-compare-prices';
  searchValue='';
  searchForm = this.fb.nonNullable.group({
    searchValue: '',
  });
  items: ItemInterface[] = [];
  
  constructor(private itemsService: ItemsService ,private fb: FormBuilder){}

  ngOnInit(): void {
    this.fetchData();
  }

  fetchData(): void{
    this.itemsService.getArticles(this.searchValue).subscribe((items)=>{
        this.items=items;
    });
  }

  onSearchSubmit(): void {
    this.searchValue=this.searchForm.value.searchValue ?? '';
    this.fetchData();
  }
}
