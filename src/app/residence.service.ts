import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Residence } from './residence.model';

@Injectable({
  providedIn: 'root',
})
export class ResidenceService {
  private residencesUrl = 'http://localhost:3000/residences'; // Backend API endpoint

  constructor(private http: HttpClient) {}

  // Fetch all residences from the backend
  getResidences(): Observable<Residence[]> {
    return this.http.get<Residence[]>(this.residencesUrl);
  }
  addResidence(residence: Residence): Observable<Residence> {
    return this.http.post<Residence>(this.residencesUrl, residence, {
      headers: { 'Content-Type': 'application/json' },
    });
  }
  getResidenceById(id: number): Observable<Residence> {
    return this.http.get<Residence>(`${this.residencesUrl}/${id}`);
  }
  
}
