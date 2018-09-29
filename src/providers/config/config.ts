import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoadingProvider } from '../loading/loading'

/*
  Generated class for the ConfigProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ConfigProvider {

  private _configData: any = null;

  constructor(public http: HttpClient, private loading: LoadingProvider) {
  }

  public Load() {
    return new Promise((resolve, reject) => {
      if (this._configData) {
        resolve(this._configData);
        return;
      }
      this.loading.Show()
      this.http.get("assets/config.json").subscribe(res => {
        this._configData = res;
        this.loading.Hide();
        resolve(this._configData);
      }, error => {
        console.log(error);
        reject(null);
        this.loading.Hide()
      });
    });
  }

  public GetConfig() {
    return this._configData;
  }
}
