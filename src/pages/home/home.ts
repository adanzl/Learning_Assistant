import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ModalController, IonicPage } from 'ionic-angular';
import { DataProvider } from '../../providers/data/data';
import { ConfigProvider } from '../../providers/config/config';
import { UtilsProvider } from '../../providers/utils/utils';

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  undoTaskList: any[];
  finishTaskList: any[];

  constructor(public navCtrl: NavController, public modalCtrl: ModalController
    , public dataProvider: DataProvider, public configProvider: ConfigProvider
    , public utils: UtilsProvider) {

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
    modal.present();
  }

  ionViewDidLoad() {
    this.configProvider.Load().then(() => {
      this.RefreshPage()
    });
  }

  public RefreshPage() {
    const taskList = this.dataProvider.GetTaskList()
    this.undoTaskList = [];
    this.finishTaskList = [];
    const config = this.configProvider.GetConfig();
    const timeline = config['timeline']
    for (var taskId in taskList) {
      let task = taskList[taskId]
      let taskCreateTime = new Date(Number(task['create_time']))
      let currentStep = task['learn_step']
      if (currentStep >= timeline.length) {
        continue;
      }
      let nextRemindDate = this.utils.AddDate(taskCreateTime, timeline[currentStep])
      if (nextRemindDate <= new Date()) {
        this.undoTaskList.push(task);
      } else {
        this.finishTaskList.push(task);
      }
    }
  }

  public UpdateTaskState(task, finished) {
    let step = task['learn_step']
    if (finished) {
      task['learn_step'] = step + 1
      task['learn_time'] = new Date().getTime().toString();
    } else {
      task['learn_step'] = step - 1
      // task['learn_time'] = new Date().getTime().toString();
    }
    this.dataProvider.Save();
    this.RefreshPage();
  }

}
