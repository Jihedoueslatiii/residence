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
  notFound: boolean = false;

  constructor(
    private route: ActivatedRoute,
    private residenceService: ResidenceService
  ) {}

  ngOnInit(): void {
    const residenceId = Number(this.route.snapshot.paramMap.get('id'));
    this.residence = this.residenceService.getResidenceById(residenceId);

    if (!this.residence) {
      this.notFound = true;
    }
  }
}
