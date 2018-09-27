import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ModalController, IonicPage } from 'ionic-angular';
import { DataProvider } from '../../providers/data/data';
import { ConfigProvider } from '../../providers/config/config';

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  undoTaskList: any[];
  finishTaskList: any[];

  constructor(public navCtrl: NavController, public modalCtrl: ModalController
    , public dataProvider: DataProvider, public configProvider: ConfigProvider) {

  }

  /**
   * showAddTaskPage
   */
  public showAddTaskPage() {
    const modal = this.modalCtrl.create('TaskAddPage');
    modal.present();
  }

  ionViewDidLoad() {
    this.RefreshPage()
  }

  RefreshPage() {
    const taskList = this.dataProvider.GetTaskList()
    this.undoTaskList
  }

  showTaskDetail(taskNode) {

  }
}
