import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-post-list-item-component',
  templateUrl: './post-list-item-component.component.html',
  styleUrls: ['./post-list-item-component.component.scss']
})
export class PostListItemComponentComponent implements OnInit {

  @Input() postTitle: string;
  @Input() postContent: string;
  @Input() postDate: Date;

  loveIts=0;
  conditionBootStrap : string;

  constructor() { }

  ngOnInit() {
  }
  onUp() {
    this.loveIts++;
    console.log(this.loveIts);
    if (this.loveIts>0){
      this.conditionBootStrap = 'yes';
    }
    else if(this.loveIts<0){
      this.conditionBootStrap = 'no'; 
    } 
    else{
      this.conditionBootStrap = 'mouais'
    }
    console.log(this.conditionBootStrap);
  }
  onDown() {
    this.loveIts--;
    console.log(this.loveIts);
    if (this.loveIts>0){
      this.conditionBootStrap = 'yes';
    }
    else if(this.loveIts<0){
      this.conditionBootStrap = 'no'; 
    } 
    else{
      this.conditionBootStrap = 'mouais'
    }
    console.log(this.conditionBootStrap);
  }
}
