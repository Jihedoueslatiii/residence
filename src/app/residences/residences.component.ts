import { Component, OnInit } from '@angular/core';
import { ResidenceService } from '../residence.service';
import { Residence } from '../residence.model';

@Component({
  selector: 'app-residences',
  templateUrl: './residences.component.html',
  styleUrls: ['./residences.component.css'],
})
export class ResidencesComponent implements OnInit {
  listResidences: Residence[] = []; // Full list of residences
  filteredResidences: Residence[] = []; // Filtered residences for display
  favorites: Residence[] = []; // List of favorite residences
  filterAddress: string = ''; // Address filter input

  constructor(private residenceService: ResidenceService) {}

  ngOnInit(): void {
    // Fetch residences and initialize filtered list
    this.residenceService.getResidences().subscribe(
      (data) => {
        this.listResidences = data;
        this.filteredResidences = [...this.listResidences];
      },
      (error) => {
        console.error('Failed to fetch residences:', error);
      }
    );
  }

  // Show the location of a residence
  showLocation(residence: Residence): void {
    if (residence.address === 'Inconnu') {
      alert('L’adresse de cette résidence est inconnue.');
    } else {
      alert(`Adresse : ${residence.address}`);
    }
  }

  // Add a residence to favorites if it's not already present
  addToFavorites(residence: Residence): void {
    if (!this.favorites.some((fav) => fav.id === residence.id)) {
      this.favorites.push(residence);
    }
  }

  // Filter residences based on the address input
  filterResidences(): void {
    if (this.filterAddress) {
      this.filteredResidences = this.listResidences.filter((residence) =>
        residence.address.toLowerCase().includes(this.filterAddress.toLowerCase())
      );
    } else {
      this.filteredResidences = [...this.listResidences];
    }
  }
}
