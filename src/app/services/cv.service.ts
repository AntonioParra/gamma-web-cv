import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CvService {

  constructor(
    private http: HttpClient
  ) { }

  getCV(person: string) {
    return this.http.get(`/cv/data/${person}/cv.json`);
  }
}
