import { Component, inject } from '@angular/core';
import { HousingService } from '../housing.service';
import { ActivatedRoute } from '@angular/router';
import { Housinglocation } from '../housiglocation';
import { FormControl, FormGroup,ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-details',
  imports: [ReactiveFormsModule],
  templateUrl: './details.component.html',
  styleUrl: './details.component.css'
})
export class DetailsComponent {
  
  /* -- injected services -- */ 
  private housingService = inject(HousingService)
  private activatedRoute = inject(ActivatedRoute)
  

  /* -- variables -- */ 
  housingLocation: Housinglocation | undefined; 
  housingLocationId = -1;


  applyForm = new FormGroup({
    firstName : new FormControl(''),
    lastName : new FormControl(''),
    email: new FormControl('')
  });

 /*
  constructor() {
    this.housingLocationId = Number(this.activatedRoute.snapshot.params['id']);
    this.housingLocation = this.housingService.getHousingLocationById(this.housingLocationId)
  }
*/
  submitApplication() {
    this.housingService.submitApplication(
      this.applyForm.value.firstName ?? '',
      this.applyForm.value.lastName ?? '',
      this.applyForm.value.email ?? '',
    )
  }
}
