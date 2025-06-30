import { Component } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { UserComponent } from './user/user.component';
import { TasksComponent } from './tasks/tasks.component';
import { DUMMY_USERS } from './dummy-users';
@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  imports: [HeaderComponent, UserComponent, TasksComponent], //add here the components to be called by app - check template
})
export class AppComponent {
  users = DUMMY_USERS;

  selectedUser: any;

  onSelectUser(id: string) {
    this.selectedUser = DUMMY_USERS.find(user => user.id === id)
  }

}
