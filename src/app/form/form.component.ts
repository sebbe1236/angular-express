import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ApiServiceService } from '../services/api-service.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
})
export class FormComponent {
  constructor(private fb: FormBuilder, private service: ApiServiceService) {}
  testForm = this.fb.group({
    email: [''],
    text: [''],
  });

  sendForm() {
    this.service.sendMessage(this.testForm.value).subscribe({
      next(value) {
        console.log(value);
      },
      error(err) {
        console.log(err);
      },
      complete() {
        console.log('test');
      },
    });
  }
}
