import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./components/header/header.component";
import { VideosytComponent } from "./components/videosyt/videosyt.component";
import { HttpClientModule } from '@angular/common/http';

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [
      RouterOutlet, 
      HeaderComponent, 
      RouterLink, 
      VideosytComponent,
      HttpClientModule
    ]
})
export class AppComponent {
  title = 'musicaCrossover';
  
  
}
