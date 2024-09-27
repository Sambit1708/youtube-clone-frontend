import { Component, computed, signal } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from "@angular/material/icon";
import { MatButtonModule } from "@angular/material/button";
import { MatSidenavModule } from "@angular/material/sidenav";
import { RouterOutlet } from '@angular/router';
import { CustomSidenavComponent } from "../../components/custom-sidenav/custom-sidenav.component";

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [MatToolbarModule, MatIconModule, MatButtonModule, MatSidenavModule, RouterOutlet, CustomSidenavComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

  logoPath: string = 'assets/youtube.png';
  
  collapsed = signal(false);

  sidnavWidth = computed(() => this.collapsed() ? '65px' : '230px');
}
