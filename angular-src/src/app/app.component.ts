// I can Use nodemon -e ts and will always watch file extension ts and restart
import { Component } from '@angular/core';
// Este file es el controller de cada componente
// Este file es el unico que yo incluyo en el index.html
@Component({
  // El selector es como yo llamo el componente en los html tags.
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // esto es como si fueras un argument en una funcion. 
  title = 'app works!';
}
