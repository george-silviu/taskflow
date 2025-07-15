import { Injectable } from '@angular/core';
import { DUMMY_TASKS } from './dummy-tasks';
import { type NewTaskData } from './task/task.model';

@Injectable({
  providedIn: 'root',
})
export class TasksService {
  private tasks = DUMMY_TASKS;

  constructor() {
    const tasks = localStorage.getItem('tasks');
    if (tasks) {
      this.tasks = JSON.parse(tasks);
    }
  }

  getUserTasks(userId: string) {
    return this.tasks.filter((task) => userId === task.userId);
  }

  addTask(newTaskData: NewTaskData, userId: string) {
    this.tasks.unshift({
      id: new Date().getTime().toString(),
      userId: userId,
      title: newTaskData.title,
      summary: newTaskData.summary,
      dueDate: newTaskData.date,
    });
    this.saveTasks();
  }

  removeTask(taskId: string) {
    this.tasks = this.tasks.filter((task) => task.id !== taskId);
    this.saveTasks();
  }

  private saveTasks() {
    localStorage.setItem('tasks', JSON.stringify(this.tasks));
  }
}
