import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import axios from 'src/app/axios';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss']
})
export class AddProductComponent {
  onSubmit(form: NgForm) {
    console.log('Your form data : ', form.value);
    axios
      .post("/product/add", form.value)
      .then(() => {
        form.resetForm();
      })
      .catch((error) => alert(error.message));
  }
}
