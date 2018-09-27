import { Component } from '@angular/core';
import { NavController, NavParams, IonicPage } from 'ionic-angular';
import { DataProvider } from '../../providers/data/data';

@IonicPage()
@Component({
  selector: 'page-task-list',
  templateUrl: 'task-list.html'
})
export class TaskListPage {
  selectedItem: any;
  taskList: any = [];

  constructor(public navCtrl: NavController, public navParams: NavParams
    , public dataProvider: DataProvider) {
    // If we navigated to this page, we will have an item available as a nav param
    this.selectedItem = navParams.get('item');

  }

  
  ionViewDidLoad() {
    const taskListData = this.dataProvider.GetTaskList()
    for(var key in taskListData){
      let task = taskListData[key]
      task['id'] = key
      this.taskList.push(task)
    }
  }

  itemTapped(event, item) {
    // That's right, we're pushing to ourselves!
    this.navCtrl.push(TaskListPage, {
      item: item
    });
  }
}
