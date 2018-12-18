import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { GlobalFuncProvider } from '../../providers/global-func/global-func';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  public domainUrl: string = "";
  public jsonItems: any;

  constructor(
    public navCtrl: NavController,
    private globalFunc: GlobalFuncProvider
  ) {

    this.domainUrl = this.globalFunc.domainName;
    this.getAlbumJson();

  }

  getAlbumJson() {
    
    let url = this.domainUrl + "json/albumList.ashx";
    this.globalFunc.getJson(url).subscribe(
      response => 
        this.jsonItems = response  
      );
  }
   

}
