import { Component, computed, inject, OnInit, signal } from '@angular/core';
import { Housinglocation } from '../housiglocation';
import { HttpClient } from '@angular/common/http';
import { HousingService } from '../housing.service';
import { HousingLocationComponent } from '../housing-location/housing-location.component';
HousingLocationComponent

@Component({
  selector: 'app-home',
  imports: [HousingLocationComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
  
  /* ---------services start-------- */
  private housingService:HousingService = inject(HousingService);
  private httpClient = inject(HttpClient)
 

  housingLocationsList = signal<Housinglocation[] | undefined>(undefined);
  searchText = signal('')
  url = 'http://localhost:3000/locations';

  ngOnInit(){
      this.httpClient.get<Housinglocation[]>(this.url).subscribe({
        next: (homeData) => {
          this.housingLocationsList.set(homeData)
        }
      })
    }    

  filterResults(text:string) {
    this.searchText.set(text);
  }

  filteredLocationList = computed(() => {
    const text = this.searchText().toLowerCase();

    return this.housingLocationsList()?.filter(location => 
      location.city.toLowerCase().includes(text)
    );
  });

  


  }
  


