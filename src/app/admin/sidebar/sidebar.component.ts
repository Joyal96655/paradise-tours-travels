import { Component, OnInit } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  constructor(
    iconRegistry:MatIconRegistry,
    sanitizer: DomSanitizer) {
      iconRegistry.addSvgIcon( "dashboard",sanitizer.bypassSecurityTrustResourceUrl("./assets/image/Icons/dashboard.svg"));
  }

  ngOnInit(): void {
  }

}
