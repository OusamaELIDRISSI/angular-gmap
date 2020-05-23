import { MapsService } from './service/maps.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'angular-gmap';

  latitude: number;
  longitude: number;
  mapType = 'satellite';

  constructor(private map: MapsService) {}

  ngOnInit(): void {
    this.map.getLocation().subscribe((data) => {
      console.log(data);
      this.latitude = data.latitude;
      this.longitude = data.longitude;
    });
  }
}
