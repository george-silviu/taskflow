import { Component, computed, Input, input } from '@angular/core';

@Component({
  selector: 'app-user',
  standalone: true,
  templateUrl: './user.component.html',
  styleUrl: './user.component.css',
})
export class UserComponent {
  // @Input({ required: true }) name!: string;
  // @Input({ required: true }) avatar!: string;

  name = input.required<string>();  //provide the generic type for name input
  avatar = input.required<string>();

  // get imagePath(){
  //   return 'assets/users/' + this.avatar;
  // }

  imagePath = computed(() => {
    return 'assets/users/' + this.avatar()
  });

  onSelectUser() {
  }
}
