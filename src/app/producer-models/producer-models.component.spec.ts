import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProducerModelsComponent } from './producer-models.component';

describe('ProducerModelsComponent', () => {
  let component: ProducerModelsComponent;
  let fixture: ComponentFixture<ProducerModelsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProducerModelsComponent]
    });
    fixture = TestBed.createComponent(ProducerModelsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
