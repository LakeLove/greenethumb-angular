import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Plant } from '../plant';
import { PlantService } from '../plant.service';

@Component({
  selector: 'app-plants',
  templateUrl: './plants.component.html',
  styleUrls: ['./plants.component.css']
})
export class PlantsComponent implements OnInit {
  plants: Plant[] = [];
  public pageNumber: number;
  public prevPage: number;
  public nextPage: number;
  public isFirst: boolean;

  constructor(
    private plantService: PlantService,
    private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.pageNumber = +this.route.snapshot.paramMap.get('page');
    this.isFirst = this.pageNumber === 1;
    this.prevPage = this.pageNumber - 1;
    this.nextPage = this.pageNumber + 1;
    this.getPage(this.pageNumber);
  }

  getPlants(): void {
    this.plantService.getPlants().subscribe(plants => this.plants = plants);
  }

  getPage(pageNum: number): void {
    if (pageNum === null) {
      this.pageNumber = 1;
      this.getPlants();
    } else {
      this.plantService.getPage(pageNum).subscribe(plants => this.plants = plants);
    }
  }

}
