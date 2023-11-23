import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ItemsService } from '../items/items.service';

@Component({
  selector: 'app-producers-menu',
  templateUrl: './producers-menu.component.html',
  styleUrls: ['./producers-menu.component.css']
})
export class ProducersMenuComponent {
  @Input() producers: string[] = [];
  
  @Output() phoneFound: EventEmitter<string> = new EventEmitter<string>()
  models: string[] = [];

  private selectedProducer: string = '';
  private selectedModel: string = '';
  constructor(private itemsService: ItemsService) { }

  isLoading = false;
  dataLoaded = false;


  onProducerChanged(event: any) {
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

