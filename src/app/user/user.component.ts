import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-user',
  standalone: true,
  templateUrl: './user.component.html',
  styleUrl: './user.component.css',
})
export class UserComponent {
  @Input({ required: true }) id!: string;
  @Input({ required: true }) name!: string;
  @Input({ required: true }) avatar!: string;
  @Output() customSelect = new EventEmitter(); //emit custom events to the parent component

  get imagePath(){
    return 'assets/users/' + this.avatar;
  }

  onSelectUser() {
    this.customSelect.emit(this.id);
  }
}
