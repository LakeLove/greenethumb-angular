import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { CarouselModule, WavesModule } from 'angular-bootstrap-md';

import { Plant } from '../plant';
import { PlantService } from '../plant.service';

@Component({
  selector: 'app-plant-detail',
  templateUrl: './plant-detail.component.html',
  styleUrls: ['./plant-detail.component.css']
})
export class PlantDetailComponent implements OnInit {
  plant: Plant;

  constructor(
    private route: ActivatedRoute,
    private plantService: PlantService,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.getPlant();
  }

  getPlant(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.plantService.getPlant(id)
      .subscribe(plant => this.plant = plant);
  }

  goBack(): void {
    this.location.back();
  }
}
