import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ServiceService } from '../service/service.service';
import { Router } from '@angular/router';
import { Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  data: any;
  constructor(
    private builder: FormBuilder,
    private service: ServiceService,
    private router: Router,
    private _http: HttpClient) { }
  registrationform = this.builder.group({
    DepartmentName: this.builder.control('', Validators.required),
    Description: this.builder.control('', Validators.required),
    Manager: this.builder.control(''),
  });
  ngOnInit(): void {
    this.data = this._http.get<any>("http://localhost:4000/Departments").subscribe(data => {
      this.data = data;
    });
  }


  proceedregistration() {
    if (this.registrationform.valid) {
      this.service.Proceedregister(this.registrationform.value).subscribe(res => {
        alert("Registered Successfully");
        this.router.navigate(['/pages/view']);
      });
    } else {
      alert('Please enter valid data');
    }
  }
  onCancel() {
    this.registrationform.reset(); // Reset the form
    this.router.navigate(['/pages/view']);//return to view page          
  }
}
