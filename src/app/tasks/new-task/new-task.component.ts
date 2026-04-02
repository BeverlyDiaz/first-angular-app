import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { NewTask } from '../task/task.model';
import { TasksService } from '../tasks.service';

@Component({
  selector: 'app-new-task',
  standalone: false,
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.css',
})
export class NewTaskComponent {
  @Input({required: true}) userId!: string;
  @Output() close = new EventEmitter<void>();
  @Output() add = new EventEmitter<NewTask>();
  enteredTitle = '';
  enteredSummary = '';
  enteredDate = '';

  private tasksService = inject(TasksService);


  onCancel() {
    this.close.emit();
  }

  onSubmit() {
   this.tasksService.addTask({
    title: this.enteredTitle,
    dueDate: this.enteredDate,
    summary: this.enteredSummary
   }, this.userId);
    this.close.emit();
   }
  }
