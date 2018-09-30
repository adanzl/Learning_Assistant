import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the UtilsProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class UtilsProvider {

  constructor(public http: HttpClient) {
  }
  public AddDate(date, days) {
    var d = new Date(date);
    d.setDate(d.getDate() + days);
    return d;
  }

  public Timetick2DateStr(timetick: string) {
    if (!timetick) {
      return ""
    }
    return new Date(Number.parseInt(timetick)).toLocaleDateString();
  }

  public emptyString(str: string) {
    return str == null || str == "" || str == undefined;
  }

}
