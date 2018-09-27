import { Component } from '@angular/core';
import { NavController, NavParams, IonicPage, ModalController } from 'ionic-angular';
import { DataProvider } from '../../providers/data/data';

@IonicPage()
@Component({
  selector: 'page-task-list',
  templateUrl: 'task-list.html'
})
export class TaskListPage {
  selectedItem: any;
  taskList: any = [];

  constructor(public navCtrl: NavController, public navParams: NavParams, public modalCtrl: ModalController
    , public dataProvider: DataProvider) {
    // If we navigated to this page, we will have an item available as a nav param
    this.selectedItem = navParams.get('item');

  }

  /**
 * showAddTaskPage
 */
  public showAddTaskPage() {
    const modal = this.modalCtrl.create('TaskDetailPage');
    modal.onDidDismiss(bNeedRefresh => {
      if(bNeedRefresh){
        this.ionViewDidLoad()
      }
    });
    modal.present();
  }

  public showTaskDetail(taskNode) {
    const modal = this.modalCtrl.create('TaskDetailPage', {'taskNode': taskNode});
    modal.onDidDismiss(bNeedRefresh => {
      if(bNeedRefresh){
        this.ionViewDidLoad()
      }
    });
    modal.present();
  }

  ionViewDidLoad() {
    const taskListData = this.dataProvider.GetTaskList()
    this.taskList = []
    for (var key in taskListData) {
      let task = taskListData[key]
      task['id'] = key
      this.taskList.push(task)
    }
  }
}
