import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  registerMode: boolean = false;
  // isLoggedIn: Observable<boolean>;


  constructor() { }


  ngOnInit(): void {

  }

  registerToggle(): void {
    this.registerMode = true;
  }

  cnacelRegisterMode(registerMode: boolean): void {
    this.registerMode = registerMode;
  }


}