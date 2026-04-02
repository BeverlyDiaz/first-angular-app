import { Injectable } from "@angular/core";
import { NewTask } from "./task/task.model";

@Injectable({providedIn: 'root'})

export class TasksService {
     private tasks = [
        {
          id: 't1',
          title: 'Task 1',
          dueDate: '2025-12-31',
          summary: 'Summary of Task 1',
          userId: 'u1'
        },
        {
          id: 't2',
          title: 'Task 2',
          dueDate: '2025-12-31',
          summary: 'Summary of Task 2',
          userId: 'u2'
        },
        {
          id: 't3',
          title: 'Task 3',
          dueDate: '2025-12-31',
          summary: 'Summary of Task 3',
          userId: 'u3'
        }
      ];

      constructor() {
        const tasks = localStorage.getItem('tasks');
        if (tasks) {
            this.tasks = JSON.parse(tasks);
        }
      }

      getUserTasks(userId: string) {
        return this.tasks.filter((task) => task.userId === userId);
      }

      addTask(taskData: NewTask, userId: string) { 
         this.tasks.unshift({
            id: new Date().getTime().toString(),
            title: taskData.title,
            dueDate: taskData.dueDate,
            summary: taskData.summary,
            userId: userId
         })
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