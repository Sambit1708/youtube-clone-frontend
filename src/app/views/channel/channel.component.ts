import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatTabsModule } from '@angular/material/tabs';
import { MatIconModule } from "@angular/material/icon";
import { MatButtonModule } from "@angular/material/button";
import { MatGridListModule } from '@angular/material/grid-list';
import { ThumbnailDetail } from '../../models';

@Component({
  selector: 'app-channel',
  standalone: true,
  imports: [MatCardModule, MatDividerModule, MatTabsModule, MatIconModule, MatButtonModule, MatGridListModule, CommonModule],
  templateUrl: './channel.component.html',
  styleUrl: './channel.component.scss'
})
export class ChannelComponent {

  logoUrl: string = "assets/user.png";

  thumbnails= signal<ThumbnailDetail[]>([
    {
      videoTitle: "Bhool Bhulaiyaa 3 (Teaser): Kartik Aaryan, Vidya Balan, Triptii Dimri | Anees Bazmee | Bhushan Kumar",
      videoId: "1",
      channelProfileUrl: "assets/user.png",
      channelName: "SamSeries",
      views: 685445,
      video_create_date: "2023-02-24",
      thumbnailUrl: "assets/Thumbnails/1bhoolBhulaiyaa.png"
    },
    {
      videoTitle: "Sahara Turns Green: Should we Celebrate or Worry? | Vantage with Palki Sharma",
      videoId: "2",
      channelProfileUrl: "assets/user.png",
      channelName: "SamSeries",
      views: 1685445,
      video_create_date: "2024-02-24",
      thumbnailUrl: "assets/Thumbnails/2shara.png"
    },
    {
      videoTitle: "Maine Pi Rakhi Hai (Song) Tu Jhoothi Main Makkaar: Ranbir Shraddha Pritam Shreya G Divya K Amitabh B",
      videoId: "3",
      channelProfileUrl: "assets/user.png",
      channelName: "SamSeries",
      views: 685445,
      video_create_date: "2022-02-24",
      thumbnailUrl: "assets/Thumbnails/3menePeeRakhiHai.png"
    },
    {
      videoTitle: "Shanks Uses Conqueror's Haki to protect Uta English Dub | One Piece Film Red 2022 (4K)",
      videoId: "4",
      channelProfileUrl: "assets/user.png",
      channelName: "SamSeries",
      views: 2085445,
      video_create_date: "2023-02-24",
      thumbnailUrl: "assets/Thumbnails/4uta.png"
    },
    {
      videoTitle: "Shyama Aan Baso (Song): Khushalii Kumar | Sachet-Parampara | Satvik | Youngveer | Bhushan Kumar",
      videoId: "5",
      channelProfileUrl: "assets/user.png",
      channelName: "SamSeries",
      views: 685445,
      video_create_date: "2023-02-24",
      thumbnailUrl: "assets/Thumbnails/5shyamaAan.png"
    },
    {
      videoTitle: "Putin Declares Russia will use Nuclear Weapons | World Watched Putin's Warning in Silence",
      videoId: "6",
      channelProfileUrl: "assets/user.png",
      channelName: "SamSeries",
      views: 685445,
      video_create_date: "2023-02-24",
      thumbnailUrl: "assets/Thumbnails/6RussiaNuke.png"
    },
    {
      videoTitle: "Login with Google and Github with Spring Boot and React JS | Social Login + OAuth2 Explained",
      videoId: "7",
      channelProfileUrl: "assets/user.png",
      channelName: "SamSeries",
      views: 485445,
      video_create_date: "2023-02-24",
      thumbnailUrl: "assets/Thumbnails/7OAuth2.png"
    },
    {
      videoTitle: "Abhilipsha Panda || OdiaNew Jagannath Bhajana || Kalki Avatar || Viral Song 2022 || Full Video Song",
      videoId: "8",
      channelProfileUrl: "assets/user.png",
      channelName: "SamSeries",
      views: 685445,
      video_create_date: "2023-02-24",
      thumbnailUrl: "assets/Thumbnails/8Binasha.png"
    },
    {
      videoTitle: "Can these companies save India's Engineers?",
      videoId: "9",
      channelProfileUrl: "assets/user.png",
      channelName: "SamSeries",
      views: 685445,
      video_create_date: "2023-02-24",
      thumbnailUrl: "assets/Thumbnails/9Jobs.png"
    },
    {
      videoTitle: "From the World of John Wick: Ballerina (2025) Official Trailer - Ana de Armas",
      videoId: "10",
      channelProfileUrl: "assets/user.png",
      channelName: "SamSeries",
      views: 685445,
      video_create_date: "2023-02-24",
      thumbnailUrl: "assets/Thumbnails/10Ballerian.png"
    },
    {
      videoTitle: "That Time I Got Reincarnated as a Slime - Episode 37 [English Sub]",
      videoId: "11",
      channelProfileUrl: "assets/user.png",
      channelName: "SamSeries",
      views: 685445,
      video_create_date: "2020-02-24",
      thumbnailUrl: "assets/Thumbnails/11ThatTimeSlime.png"
    },
    {
      videoTitle: "Angular 18 is EXACTLY what we needed",
      videoId: "12",
      channelProfileUrl: "assets/user.png",
      channelName: "SamSeries",
      views: 685445,
      video_create_date: "2023-02-24",
      thumbnailUrl: "assets/Thumbnails/12Angular18.png"
    }
  ])
}
