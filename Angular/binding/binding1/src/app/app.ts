import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('binding');
// დავალება1:
  index:number=0;
  imageString:string[] = [
    'https://shorturl.at/85WvE',
    'https://shorturl.at/DO3f9',
    'https://shorturl.at/hOPPs',
    'https://shorturl.at/6IXO3'
  ];
  back(){
    if(this.index>0){
      this.index--;
    }else{
      alert('No previous image');
    }
  }
  forward(){
    if(this.index<this.imageString.length-1){
      this.index++;
    }else{
      alert('No next image');
    }
  }
// დავალება2:
  color:string='plum';
  bgColor(){
    this.color=this.color==='plum' ? 'rgb(196, 206, 187)' : 'plum';
  }

  // დავალება3:
  fontColor:string="mediumvioletred";
  changeText(){
    this.fontColor=this.fontColor==='mediumvioletred' ? 'pink' : 'mediumvioletred';
  }
}
