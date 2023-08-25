import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ItemsService } from '../items/items.service';

@Component({
  selector: 'app-producer-models',
  templateUrl: './producer-models.component.html',
  styleUrls: ['./producer-models.component.css']
})
export class ProducerModelsComponent implements OnInit {
  
  producer ='';
  models:string[] = [];
  constructor(private route: ActivatedRoute,private itemsService:ItemsService){
    this.itemsService.getModels(this.producer).subscribe((models)=>{
      this.models=models;
    });
  }

  ngOnInit(): void {
    this.producer = this.route.snapshot.paramMap.get('producer') ?? '';
  }
  




}
