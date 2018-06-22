import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  bools:boolean[] = [true,false];
  nums:number[] = [1,2.5,5];
  strs:string[] = ['hi', 'there'];
  test :Array<{id:number, name:string}> = [{
    id:1 ,
    name: 'test'
  }];
  user:Array<{id:number, name:string}> = [{
    id:2 ,
    name: 'user'
  }];
  objs:Array<any>  = [
    this.test, this.user
  ];
  types:any[] = [this.bools,this.nums,this.strs,this.objs];
  
  ngOnInit(){
    
    console.log(this.objs)
  }


  getTypeof(type:string){
    
   let x = typeof type;
    console.log(typeof x);
    return typeof x;
  }
}
