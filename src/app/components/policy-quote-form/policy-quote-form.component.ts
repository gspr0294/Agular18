import { CommonModule } from '@angular/common';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ReactiveFormsModule, FormGroup, FormBuilder, Validators, FormArray } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';


@Component({
  selector: 'app-policy-quote-form',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule,RouterModule],
  templateUrl: './policy-quote-form.component.html',
  styleUrl: './policy-quote-form.component.scss'
})
export class PolicyQuoteFormComponent implements OnInit {
  policyForm: FormGroup;
  maxPolicies: number = 4;  // Define the maximum number of policies
  submittedData: any;
  isNewBusiness!: string;
  @Output() submitEvent = new EventEmitter<any>();

  constructor(private fb: FormBuilder, private router: Router) {
    this.policyForm = this.fb.group({
      policies: this.fb.array([this.fb.control('', Validators.required)]),  // Initialize with one Policy
    });
  }

  ngOnInit(): void {
    this.isNewBusiness = this.router.url;
  }
  get policies(): FormArray {
    return this.policyForm.get('policies') as FormArray;
  }

  createPolicy(): any {
    return this.fb.control('');  // Create a new FormControl
  }

  addPolicy() {
    if (this.policies.length < this.maxPolicies) {
      this.policies.push(this.createPolicy());  // Add a new Policy
    } else {
      alert(`You can only add up to ${this.maxPolicies} policies.`);
    }
  }

  removePolicy(index: number) {
    this.policies.removeAt(index);  // Remove the Policy at the specified index
  }

  onSubmit() {
    if (this.policyForm.valid) {
      this.submittedData = this.policyForm.value;  // Store the submitted data

      if (this.router.url == '/quote') {
        this.submitEvent.emit(this.policyForm.value);
      }
      else {
        this.router.navigate(['/quote']);
      }
      console.log(this.submittedData);  // Log the form data
    } else {
      console.log('Form is not valid');
    }

  }
}
