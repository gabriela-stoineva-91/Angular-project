import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent {
  createRecipeSubmitHandler(form: NgForm): void {
    if (form.invalid) {
      return;
    }

    console.log(form.value);
  }

}
