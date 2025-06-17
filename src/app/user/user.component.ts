import { Component, computed, signal } from '@angular/core';
import { DUMMY_USERS } from '../dummy-users';

const RANDOM_INDEX = Math.floor(Math.random() * DUMMY_USERS.length);

@Component({
  selector: 'app-user',
  standalone: true,
  templateUrl: './user.component.html',
  styleUrl: './user.component.css',
})
export class UserComponent {
  selectedUser = signal(DUMMY_USERS[RANDOM_INDEX]); //this variable can be accessed in template
  imagePath = computed(() => 'assets/users/' + this.selectedUser().avatar) //computing values using signals

  // get imagePath() {
  //   return 'assets/users/' + this.selectedUser.avatar;
  // }
 
  onSelectUser() {
    const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length);
    this.selectedUser.set(DUMMY_USERS[randomIndex]);
  }
}
