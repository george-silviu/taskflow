import { Component } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { UserComponent } from './user/user.component';
import { DUMMY_USERS } from './dummy-users';
@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  imports: [HeaderComponent, UserComponent], //add here the components to be called by app - check template
})
export class AppComponent {
  users = DUMMY_USERS;

  onSelectUser(id: string){
    console.log(id)
  }
}
