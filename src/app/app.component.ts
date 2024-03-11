import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./header/header.component";
import { VideosytComponent } from "./videosyt/videosyt.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [RouterOutlet, HeaderComponent, RouterLink, VideosytComponent]
})
export class AppComponent {
  title = 'musicaCrossover';
  
  
}
