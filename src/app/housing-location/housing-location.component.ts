import { Component,input } from '@angular/core';
import { Housinglocation } from '../housiglocation';
import { RouterLink } from '@angular/router';


@Component({
  selector: 'app-housing-location',
  imports: [RouterLink],
  templateUrl: './housing-location.component.html',
  styleUrl: './housing-location.component.css'
})
export class HousingLocationComponent {
  housingLocation = input.required<Housinglocation>();
}
