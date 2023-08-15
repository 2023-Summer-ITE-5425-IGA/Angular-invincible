import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import axios from 'src/app/axios';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  onSubmit(form: NgForm) {
    console.log('Your form data : ', form.value);
    axios
      .post("http://localhost:8000/api/register", form.value)
      .then((res) => {
        form.resetForm();
        localStorage.setItem('token', res.data.token);
      })
      .catch((error) => alert(error.message));
  }
}
