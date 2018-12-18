import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';

@Injectable()
export class GlobalFuncProvider {

  public domainName: string = "http://lvltunes.daijiworld.com/"
  //public domainName: string = "http://192.168.1.2/lvltunes/"

  constructor(public http: HttpClient) {
    console.log('Hello GlobalFuncProvider Provider');
  }

  getJson(url: string) {
    return this.http.get(url);
    // .do(res=>console.log(res));
  }


}
