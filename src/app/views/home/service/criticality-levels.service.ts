import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Criticality } from 'src/app/models/criticality';

@Injectable({
  providedIn: 'root',
})
export class CriticalityLevelsService {
  constructor(private http: HttpClient) {}

  getCriticalityLevels() {
    return this.http
      .get('http://localhost:3001/criticalityLevels')
      .toPromise()
      .then((res) => <Criticality[]>res)
      .then((data) => {
        return data;
      });
  }
}
