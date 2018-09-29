import { Injectable } from '@angular/core';
import { LoadingController } from 'ionic-angular';

/*
  Generated class for the LoadingProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class LoadingProvider {

  constructor(public loadingCtrl: LoadingController) {
  }

  private loading: any;
  // 显示loading
  Show() {
    this.loading = this.loadingCtrl.create(
      {
        content: '努力加载中...'
      }
    );
    this.loading.present();
  }
  // 隐藏loading
  Hide() {
    if (this.loading) {
      this.loading.dismiss();
    }
  }
}
