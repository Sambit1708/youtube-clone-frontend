import { CommonModule } from '@angular/common';
import { Component, Input, signal } from '@angular/core';
import { MenuItem } from '../../models';
import { MatListModule } from "@Angular/material/list";
import { MatIconModule } from "@angular/material/icon";
import { RouterModule } from '@angular/router';
import {MatDividerModule} from '@angular/material/divider';

@Component({
  selector: 'app-custom-sidenav',
  standalone: true,
  imports: [MatListModule, MatIconModule, CommonModule, RouterModule, MatDividerModule],
  templateUrl: './custom-sidenav.component.html',
  styleUrl: './custom-sidenav.component.scss'
})
export class CustomSidenavComponent {

  sideNavCollapsed = signal(false)
  @Input() set collapsed(val: boolean) {
    this.sideNavCollapsed.set(val);
  }

  menuItemsUpper = signal<MenuItem[]>([
    {
      icon: "home",
      label: "Home",
      route: "/v/home"
    },
    {
      icon: "settings",
      label: "Settings",
      route: "setting"
    },
    {
      icon: "info",
      label: "About",
      route: "about"
    }
  ]);

  menuItemsDown = signal<MenuItem[]>([
    {
      icon: "video_library",
      label: "Your Channel",
      route: "channel"
    },
    {
      icon: "history",
      label: "History",
      route: "history"
    },
    {
      icon: "playlist_play",
      label: "Playlists",
      route: "playlist"
    },
    {
      icon: "smart_display",
      label: "Your Videos",
      route: "videos"
    },
    {
      icon: "thumb_up",
      label: "Liked Videos",
      route: "likes"
    }
  ]);
}
