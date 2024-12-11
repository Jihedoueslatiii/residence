import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ResidenceService } from '../residence.service';
import { Residence } from '../residence.model';

@Component({
  selector: 'app-residence-details',
  templateUrl: './residence-details.component.html',
  styleUrls: ['./residence-details.component.css'],
})
export class ResidenceDetailsComponent implements OnInit {
  residence: Residence | null = null;

  constructor(
    private route: ActivatedRoute,
    private residenceService: ResidenceService
  ) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.residenceService.getResidenceById(id).subscribe(
      (data) => {
        this.residence = data;
      },
      (error) => {
        console.error('Failed to fetch residence details:', error);
      }
    );
  }
}
