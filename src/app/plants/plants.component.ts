import { Component, OnInit } from '@angular/core';

import { Plant } from '../plant';
import { PlantService } from '../plant.service';

@Component({
  selector: 'app-plants',
  templateUrl: './plants.component.html',
  styleUrls: ['./plants.component.css']
})
export class PlantsComponent implements OnInit {
  plants: Plant[];

  constructor(private plantService: PlantService) { }

  ngOnInit(): void {
    this.getPlants();
  }

  getPlants(): void {
    this.plantService.getPlants()
      .subscribe(plants => this.plants = plants);
  }

  delete(plant: Plant): void {
    this.plants = this.plants.filter(p => p !== plant);
    this.plantService.deletePlant(plant).subscribe();
  }
}
