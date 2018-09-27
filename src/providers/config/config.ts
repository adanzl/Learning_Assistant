import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the ConfigProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ConfigProvider {

  private _configData: any

  constructor(public http: HttpClient) {
    this.load()
  }

  load(){
    this.http.get("assets/config.json").subscribe(res =>{
      this._configData = res['data']
    }, error => {
      console.log(error);
    });
  }

  public GetConfig(){
    return this._configData;
  }
}
