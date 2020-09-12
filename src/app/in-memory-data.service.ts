import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Plant } from './plant';

@Injectable({ providedIn: 'root', })
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const plants = [
      { id: 678281, common_name: 'Evergreen Oak' },
      { id: 190500, common_name: 'stinging nettle' },
      { id: 126957, common_name: 'orchardgrass' }
    ];
    return {plants};
  }
//
//   genId(plants: Plant[]): number {
//     return plants.length > 0 ? Math.max(...plants.map(plant => plant.id)) + 1 : 11;
//   }
}
