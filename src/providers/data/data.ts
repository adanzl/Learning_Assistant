import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the DataProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class DataProvider {

  dataSet: any;

  constructor(public http: HttpClient) {
    this.Load()
  }

  private Load() {
    const dataStr = localStorage.getItem('save');
    this.dataSet = JSON.parse(dataStr);
    if (this.dataSet == null) {
      this.dataSet = {}
    }
  }

  Save() {
    const dataStr = JSON.stringify(this.dataSet)
    localStorage.setItem('save', dataStr);
  }

  SetSave(dataStr) {
    localStorage.setItem('save', dataStr);
  }

  AddTask(task) {
    const id = this.GenerateId()
    let taskNode = this.dataSet['TaskData']
    if (taskNode == null) {
      this.dataSet['TaskData'] = {}
    }
    task['id'] = id;
    this.dataSet['TaskData'][id] = task
    this.Save()
  }

  UpdateTask(task) {
    const id = task.taskId;
    this.dataSet['TaskData'][id] = task
    this.Save()
  }

  GetTask(taskId) {
    return this.dataSet['TaskData'][taskId]
  }

  RemoveTask(taskId) {
    delete this.dataSet['TaskData'][taskId];
    this.Save()
  }

  GetTaskList() {
    return this.dataSet['TaskData'];
  }

  GenerateId() {
    return new Date().getTime();
  }
}
