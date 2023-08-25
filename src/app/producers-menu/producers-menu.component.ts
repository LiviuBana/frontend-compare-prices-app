import { Component,Input } from '@angular/core';
import { ItemsService } from '../items/items.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-producers-menu',
  templateUrl: './producers-menu.component.html',
  styleUrls: ['./producers-menu.component.css']
})
export class ProducersMenuComponent {
  @Input() data: string[] = [];
  @Input() trigger = "Trigger";
  //@Input() isRootNode = false;


  constructor(private itemsService: ItemsService,private router: Router){}

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
  onBtnClick(producer : string){

    this.router.navigate(['/models',producer]);
  }
}

