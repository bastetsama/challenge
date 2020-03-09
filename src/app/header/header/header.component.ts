import { Component, OnInit } from '@angular/core';
import { FormGroup,  ReactiveFormsModule, FormControl, Validators } from '@angular/forms';
import { User } from './../../user';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  user: FormGroup;

  constructor() { }

  ngOnInit() {
    this.user = new FormGroup({
      username: new FormControl('', [Validators.required, Validators.minLength(2)]),
      password: new FormControl('', Validators.required)
  });

  }

  grabarUsuarios(username:string,password:string) {
    event.preventDefault();
    let currentuser:User = {username: username, password: password};
    localStorage.setItem('User', JSON.stringify(currentuser));
  }

}
