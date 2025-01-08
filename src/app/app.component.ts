import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; 

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule],
  templateUrl:'./start_page.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'homsses';
}