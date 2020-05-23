import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Location } from '../model/location.model';

@Injectable({
  providedIn: 'root'
})
export class MapsService {

  constructor(private http: HttpClient) { }

  getLocation(){
    return this.http.get<Location>('https://ipapi.co/json/');
  }
}
