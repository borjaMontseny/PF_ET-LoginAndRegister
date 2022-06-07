import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'LoginAndRegister';
  constructor() { }


  ngOnInit(): void {

    const sign_in_btn: any = document.querySelector("#sign-in-btn");
    const sign_up_btn: any = document.querySelector("#sign-up-btn");
    const container: any = document.querySelector(".container");

    sign_up_btn.addEventListener("click", () => {
      container.classList.add("sign-up-mode");
    });

    sign_in_btn.addEventListener("click", () => {
      container.classList.remove("sign-up-mode");
    });

  }
}






