import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
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
    { url: '/assets/image-1.jpg', title: 'samsung' },
    { url: '/assets/image-2.jpg', title: 'iphone' },
    { url: '/assets/image-3.jpg', title: 'oneplus' },
    { url: '/assets/image-4.jpg', title: 'redmi' },
    { url: '/assets/image-5.jpg', title: 'xiaomi' },
  ];


  searchValue = '';
  searchForm = this.fb.nonNullable.group({
    searchValue: '',
  });


  items: ItemInterface[] = [];
  producers: string[] = [];
  models: string[] = [];

  showItem=false

  constructor(private itemsService: ItemsService, private fb: FormBuilder) {
    
  }



  ngOnInit(): void {
    this.itemsService.getProducers().subscribe((producers) => {
      this.producers = producers;
    });
  }

  fetchData(): void {
    this.itemsService.getArticles(this.searchValue).subscribe((items) => {
      this.items = items;
    });
  }

  onSearchSubmit(): void {
    this.searchValue = this.searchForm.value.searchValue ?? '';
    this.showItem=true
    this.itemsService.getArticles(this.searchValue).subscribe((items) => {
      this.items = items;
    });
  }

  onPhoneFound(phone: string) {
    this.searchForm.reset();
    this.showItem=true
    this.itemsService.getArticles(phone).subscribe((items) => {
      this.items = items;
    });
  }
}
