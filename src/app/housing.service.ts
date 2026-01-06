import { inject, Injectable, OnInit } from '@angular/core';
import { type Housinglocation } from './housiglocation';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HousingService {

  private httpClient = inject(HttpClient);

  
/*
   getHousingLocationById(id: number):Housinglocation | undefined {
    return this.housingLocationList.find((housingLocation) => id === housingLocation.id)
    
  }
*/

  submitApplication(firstName: string, lastName: string, email: string) {
    console.log(`Homes application received firstname: ${firstName}, lastName: ${lastName}, email: ${email}`);
  }
}
