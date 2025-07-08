import { Component, Input } from '@angular/core';
import { TaskComponent } from './task/task.component';
import { NewTaskComponent } from './new-task/new-task.component';
import { DUMMY_TASKS } from './dummy-tasks';

@Component({
  selector: 'app-tasks',
  standalone: true,
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css',
  imports: [TaskComponent, NewTaskComponent],
})
export class TasksComponent {
  @Input({ required: true }) userId!: string;
  @Input({ required: true }) name!: string;
  isNewTaskDialogOpen = false;
  tasks = DUMMY_TASKS;

  get selectedUserTasks() {
    return this.tasks.filter((task) => this.userId === task.userId);
  }

  onTaskComplete(taskId: string) {
    this.tasks = this.tasks.filter((task) => task.id !== taskId);
  }

  onNewTaskCreate() {
    this.isNewTaskDialogOpen = true;
  }

  onNewTaskCancel() {
    this.isNewTaskDialogOpen = false;
  }
}
