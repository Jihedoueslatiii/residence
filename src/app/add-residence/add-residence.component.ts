import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ResidenceService } from '../residence.service';

@Component({
  selector: 'app-add-residence',
  templateUrl: './add-residence.component.html',
  styleUrls: ['./add-residence.component.css'],
})
export class AddResidenceComponent {
  addResidenceForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private residenceService: ResidenceService,
    private router: Router
  ) {
    this.addResidenceForm = this.fb.group({
      name: ['', Validators.required],
      address: ['', Validators.required],
      status: ['Disponible', Validators.required],
    });
  }

  onSubmit(): void {
    if (this.addResidenceForm.valid) {
      const newResidence = this.addResidenceForm.value;
      this.residenceService.addResidence(newResidence).subscribe(() => {
        alert('Résidence ajoutée avec succès !');
        this.router.navigate(['/residences']); // Redirect to residences list
      });
    }
  }
}
