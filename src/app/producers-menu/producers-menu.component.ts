import { Component,Input } from '@angular/core';
import { ItemsService } from '../items/items.service';
@Component({
  selector: 'app-producers-menu',
  templateUrl: './producers-menu.component.html',
  styleUrls: ['./producers-menu.component.css']
})
export class ProducersMenuComponent {
  @Input() data: string[] = [];
  @Input() trigger = "Trigger";
  //@Input() isRootNode = false;


  constructor(private itemsService: ItemsService){}

  isLoading=false;
  dataLoaded=false;

  getModels(producer : string){
    if (!this.dataLoaded) {
      this.isLoading = true;
      this.itemsService.getModels(producer).subscribe((d) => {
        this.data = d;
        this.isLoading = false;
        this.dataLoaded = true;
      });
  }
}
}
