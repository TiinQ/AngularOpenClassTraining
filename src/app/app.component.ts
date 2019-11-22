import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  loveIts;
  date = new Date();

  posts = [
    {
      title: 'Le premier Post',
      content: 'Voici mon premier post, lalalalalalalalal',
    created_at: this.date
    },
    {
      title: 'Le Deuxième Post',
      content: 'Voici deuxième post, lalalalalalalalal',
      created_at: this.date
    },
    {
      title: 'Le Troisième Post',
      content: 'Voici mon troisième post, lalalalalalalalal' ,
        created_at: this.date
    }
  ]
}
