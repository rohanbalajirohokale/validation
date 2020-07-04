import { Component, OnInit } from '@angular/core';
//import { gunzip } from 'zlib';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css']
})
export class FirstComponent implements OnInit {

  bname:string;
  str:string;
  flag:boolean=false;
  constructor() { }

  ngOnInit(): void {
  }


gun()
{
  this.str = 'your enterd batchname is '+this.bname;
}
fun(event:any)
{
  this.flag=true;
  this.bname =(<HTMLInputElement>event.target).value;
}
}
