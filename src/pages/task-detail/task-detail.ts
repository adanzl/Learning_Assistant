import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController, AlertController } from 'ionic-angular';
import { DataProvider } from '../../providers/data/data';

/**
 * Generated class for the TaskDetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-task-detail',
  templateUrl: 'task-detail.html',
})
export class TaskDetailPage {

  _taskNode: any;

  private task_id: string;

  private task_title: string;

  private task_content: string;

  private task_learn_step: number = 0;

  private task_create_time: string = new Date().getTime().toString();

  private task_time_label: string;

  constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl: ViewController
    , public dataProvider: DataProvider, private alertCtrl: AlertController) {
    this._taskNode = navParams.get('taskNode')
    if (this._taskNode != null) {
      this.task_id = this._taskNode['id'];
      this.task_title = this._taskNode['title'];
      this.task_content = this._taskNode['content'];
      this.task_learn_step = this._taskNode['learn_step'];
      this.task_create_time = this._taskNode['create_time']
    }
    this.task_time_label = new Date(Number(this.task_create_time)).toLocaleDateString();
  }

  ionViewDidLoad() {

  }

  Close(bNeedRefresh) {
    this.viewCtrl.dismiss(bNeedRefresh)
  }

  Del() {
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
            if (this.task_id != null) {
              this.dataProvider.RemoveTask(this.task_id)
            }
            this.Close(true)
          }
        }
      ]
    });
    alert.present();
  }

  Submit() {
    var task = {
      "title": this.task_title,
      "content": this.task_content,
      "learn_step": this.task_learn_step,
      "create_time": this.task_create_time
    }
    if (this.task_id != null) {
      this.dataProvider.UpdateTask(task)
    } else {
      this.dataProvider.AddTask(task)
    }
    this.Close(true)
  }
}
