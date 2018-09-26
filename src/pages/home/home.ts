import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ModalController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController, public modalCtrl: ModalController) {

  }

  /**
   * showAddTaskPage
   */
  public showAddTaskPage() {
    const modal = this.modalCtrl.create('AddTaskPage');
    modal.present();
  }

}
