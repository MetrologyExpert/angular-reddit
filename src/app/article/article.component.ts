import { Component, OnInit, HostBinding, Input } from '@angular/core';
import { Article } from '../model/article.model';

@Component({
  selector: 'article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss']
})
export class ArticleComponent implements OnInit {
  @HostBinding('attr.class') cssClass = 'row';
  @Input() article: Article;



  constructor() {
   }

   voteUp():boolean {
     this.article.voteUp();
     return false;
   }

   voteDown(): boolean{
     this.article.voteDown();
     return false
   }

  ngOnInit(): void {
  }

}
