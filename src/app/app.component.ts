import { Component, OnInit } from '@angular/core';
import { ItemsService } from './items/items.service';
import { ItemInterface } from './items/item.interface';
import { FormBuilder } from '@angular/forms';
import { SlideInterface } from './imageSlider/types/slide.interface';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {


  slides: SlideInterface[] = [
    { url: '/assets/image-1.jpg', title: 'beach' },
    { url: '/assets/image-2.jpg', title: 'boat' },
    { url: '/assets/image-3.jpg', title: 'forest' },
    { url: '/assets/image-4.jpg', title: 'city' },
    { url: '/assets/image-5.jpg', title: 'italy' },
  ];

  title = 'angular-compare-prices';
  searchValue='';
  searchForm = this.fb.nonNullable.group({
    searchValue: '',
  });
  items: ItemInterface[] = [];
  producers: string[] = [];
  models:string[] = [];
  
  constructor(private itemsService: ItemsService ,private fb: FormBuilder){
    this.itemsService.getProducers().subscribe((producers)=>{
      this.producers=producers;
    });
  }

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

  searchCategory() {
    throw new Error('Method not implemented.');
    }
}
