import { Component, OnChanges } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the MultiplecancerPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-multiplecancer',
  templateUrl: 'multiplecancer.html',
})
export class MultiplecancerPage implements OnChanges {
  total ;
  Pollutant2 ;
  Concentration  ;
  tables=0
  tableDis="false";
res=[];
final=[];
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MultiplecancerPage');
  }
  ngOnChanges(){
    console.log("changes done");
  }
  getTableVlaues(){
    console.log("this is triggered");
    let number_of_values=Object.keys(this.Pollutant2).length
    
    for(let i=0;i<number_of_values;i++){
      this.res.push(i);
      console.log(this.res);
    }
    //this.final=[[res:this.res,values:this.Pollutant2]
  }
  calculate(){
    console.log("total is"+this.Pollutant2);
    this.tables=4;
    this.tableDis="true";
    console.log("concentrationis"+this.Concentration);

     }
}
