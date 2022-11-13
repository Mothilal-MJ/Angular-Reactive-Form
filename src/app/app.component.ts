import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
// import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'react_form';

  countryList = [
    {"countryname": ""},
    {"countryname": "India"},
    {"countryname": "USA"},
    {"countryname": "England"},
  ];

  userForm!: FormGroup;
  ngOnInit(){
    this.userForm = new FormGroup({
      'firstname': new FormControl(null,Validators.required),
      'lastname': new FormControl(null),
      'email': new FormControl(null,[Validators.required, Validators.email]),
      'gender': new FormControl(null),
      'isMarried': new FormControl(null),
      'address': new FormGroup({
        'country': new FormControl(null),
        'city': new FormControl(null),
        'street': new FormControl(null),
        'pincode': new FormControl(null),
      })
    });
  }
  onSubmit(){
    console.log(this.userForm);
    this.userForm.reset
  }
}
