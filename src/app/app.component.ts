import { Component, OnInit } from '@angular/core';
import { AuthService } from './_service/auth/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';
  user = null;

  constructor(private auth: AuthService) { }

  ngOnInit() {
    this.auth.currentUserObservable().subscribe(
      (user) => {
        this.user = user;
        // console.log('AppInit>>');
        // console.log(user);
      });
  }
}
