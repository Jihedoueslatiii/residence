import { Component, OnInit } from '@angular/core';
import { ResidenceService } from '../residence.service';
import { Residence } from '../residence.model';

@Component({
  selector: 'app-residences',
  templateUrl: './residences.component.html',
  styleUrls: ['./residences.component.css'],
})
export class ResidencesComponent implements OnInit {
  listResidences: Residence[] = [];
  favorites: Residence[] = [];
  filterAddress = '';
  filteredResidences: Residence[] = [];

  constructor(private residenceService: ResidenceService) {}

  ngOnInit() {
    // Fetch residences from the service
    this.listResidences = this.residenceService.getResidences();
    this.filteredResidences = [...this.listResidences];  // Initializing the filtered list
  }

  // Show residence address
  showLocation(residence: Residence) {
    if (residence.address === 'Inconnu') {
      alert('L’adresse de cette résidence est inconnue.');
    } else {
      alert(`Adresse : ${residence.address}`);
    }
  }

  // Add to favorites list if not already in the list
  addToFavorites(residence: Residence) {
    if (!this.favorites.some((fav) => fav.id === residence.id)) {
      this.favorites.push(residence);
    }
  }

  // Filter residences based on address input
  filterResidences() {
    if (this.filterAddress) {
      this.filteredResidences = this.listResidences.filter((residence) =>
        residence.address.toLowerCase().includes(this.filterAddress.toLowerCase())
      );
    } else {
      this.filteredResidences = [...this.listResidences];
    }
  }
}
