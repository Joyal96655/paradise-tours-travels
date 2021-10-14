import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { MatIconRegistry } from '@angular/material/icon';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(
    iconRegistry:MatIconRegistry,
    sanitizer: DomSanitizer) {
      iconRegistry.addSvgIcon( "login",sanitizer.bypassSecurityTrustResourceUrl("./assets/image/Icons/login.svg"));
      iconRegistry.addSvgIcon( "home",sanitizer.bypassSecurityTrustResourceUrl("./assets/image/Icons/home.svg"));
  }

  ngOnInit(): void {
  }

}
