import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { DataProvider } from '../../providers/data/data';

/**
 * Generated class for the TaskAddPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-add-task',
  templateUrl: 'task-add.html',
})
export class TaskAddPage {

  private task_title: string;

  private task_content: string;

  constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl: ViewController
    , public dataProvider: DataProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TaskAddPage');
  }

  Close() {
    this.viewCtrl.dismiss()
  }

  Submit() {
    var task = {
      "title": this.task_title,
      "content": this.task_content,
      "learn_step": 0,
      "create_time": new Date().getTime()
    }
    this.dataProvider.AddTask(task)
    this.viewCtrl.dismiss()
  }
}
