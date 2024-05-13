import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {

  selectedLanguage: any;
  languaguesList: any[] = [];

  public changeMode() {
    //document.body.classList.toggle('dark-theme');
  }

  ngOnInit(): void {

  }

}
