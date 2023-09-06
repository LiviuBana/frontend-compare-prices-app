import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ItemsService } from '../items/items.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-producers-menu',
  templateUrl: './producers-menu.component.html',
  styleUrls: ['./producers-menu.component.css']
})
export class ProducersMenuComponent {
  @Input() producers: string[] = [];
  @Input() trigger = "Trigger";
  @Output() phoneFound: EventEmitter<string> = new EventEmitter<string>()
  //@Input() isRootNode = false;
  models: string[] = [];

  private selectedProducer: string = '';
  private selectedModel: string = '';
  constructor(private itemsService: ItemsService, private router: Router) { }

  isLoading = false;
  dataLoaded = false;

  // getModels(producer: string) {
  //   if (!this.dataLoaded) {
  //     this.isLoading = true;
  //     this.itemsService.getModels(producer).subscribe((d) => {
  //       this.producers = d;
  //       this.isLoading = false;
  //       this.dataLoaded = true;
  //     });
  //   }
  // }

  onBtnClick(producer: string) {

    this.router.navigate(['/models', producer]);
  }

  onOptionChanged(event: any) {
    this.selectedProducer = event.value;
    this.clearModels();

    this.getModels(this.selectedProducer);
  }

  onModelChanged(event: any) {
    this.selectedModel = event.value;

    this.phoneFound.emit(`${this.selectedProducer} ${this.selectedModel}`)
  }

  private clearModels(): void {
    this.models = [];
  }

  private getModels(producer: string): void {
    this.isLoading = true;
    this.itemsService.getModels(producer).subscribe({
      next: (models) => this.models = models,
      complete: () => this.isLoading = false,
      error: (error) => {
        console.error(error);
        this.isLoading = false;
      }
    });
  }
}

