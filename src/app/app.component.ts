import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './header/header.component';
import { ProfileCardComponent } from './common-ui/profile-card/profile-card.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, HomeComponent, ProfileCardComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'homsses';
}
