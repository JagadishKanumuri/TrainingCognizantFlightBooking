import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search-flight',
  templateUrl: './search-flight.component.html',
  styleUrls: ['./search-flight.component.scss']
})
export class SearchFlightComponent implements OnInit {

  places: string[] = [
    "Hyderabad",
    "Bangalore",
    "Chennai",
    "Cochin",
    "Kolkata",
    "Delhi"
    
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
