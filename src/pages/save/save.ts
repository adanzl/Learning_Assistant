import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { DataProvider } from '../../providers/data/data';
import { Clipboard } from '@ionic-native/clipboard';

/**
 * Generated class for the SavePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-save',
  templateUrl: 'save.html',
})
export class SavePage {

  _dataStr: string;

  constructor(public navCtrl: NavController, public navParams: NavParams, private clipboard: Clipboard,
    public dataProvider: DataProvider, private alertCtrl: AlertController) {
  }

  ionViewDidLoad() {
    this._dataStr = JSON.stringify(this.dataProvider.dataSet, null, '\t')
  }

  Submit() {
    let alert = this.alertCtrl.create({
      title: 'Confirm',
      message: 'Do you want to Force Write SAVE?',
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
            // this.dataProvider.RemoveTask(this.task_id)
            this.dataProvider.SetSave(this._dataStr);
            this.ionViewDidLoad()
          }
        }
      ]
    });
    alert.present();
  }

  CopySave() {
    this.clipboard.copy(this._dataStr);
  }
}
