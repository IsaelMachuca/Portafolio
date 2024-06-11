import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private apiUrl = 'https://remaining-cecelia-izaelmachuca-3f13cfac.koyeb.app/';

  constructor(private http: HttpClient) {}

  getSkills(): Observable<any> {
    return this.http.get<any>(this.apiUrl + 'skills/getData');
  }

  getStrengths(): Observable<any> {
    return this.http.get<any>(this.apiUrl + 'strengths/getData');
  }

  getProjects(): Observable<any> {
    return this.http.get<any>(this.apiUrl + 'projects/getData');
  }
}
