import { Component } from '@angular/core';
import { NavController, NavParams, IonicPage, ModalController, AlertController } from 'ionic-angular';
import { DataProvider } from '../../providers/data/data';
import { UtilsProvider } from '../../providers/utils/utils';

@IonicPage()
@Component({
  selector: 'page-task-list',
  templateUrl: 'task-list.html'
})
export class TaskListPage {
  selectedItem: any;
  taskList: any = [];

  constructor(public navCtrl: NavController, public navParams: NavParams, public modalCtrl: ModalController
    , public dataProvider: DataProvider, public util: UtilsProvider, private alertCtrl: AlertController) {
    // If we navigated to this page, we will have an item available as a nav param
    this.selectedItem = navParams.get('item');

  }

  /**
 * showAddTaskPage
 */
  public showAddTaskPage() {
    const modal = this.modalCtrl.create('TaskDetailPage');
    modal.onDidDismiss(bNeedRefresh => {
      if (bNeedRefresh) {
        this.ionViewDidLoad()
      }
    });
    modal.present();
  }

  public showTaskDetail(taskNode) {
    const modal = this.modalCtrl.create('TaskDetailPage', { 'taskNode': taskNode });
    modal.onDidDismiss(bNeedRefresh => {
      if (bNeedRefresh) {
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

  Del(task) {
    let alert = this.alertCtrl.create({
      title: 'Confirm',
      message: 'Do you want to DEL this TASK?',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'OK',
          handler: () => {
            if (task['taskId'] != null) {
              this.dataProvider.RemoveTask(task['taskId'])
            }
            this.ionViewDidLoad()
          }
        }
      ]
    });
    alert.present();
  }
}
