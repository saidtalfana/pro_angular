import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ArticleDto } from 'src/app/dto/ArticleDto';
import { ArticleService } from 'src/app/service/article.service';

@Component({
  selector: 'app-article-detailes',
  templateUrl: './article-detailes.component.html',
  styleUrls: ['./article-detailes.component.css']
})
export class ArticleDetailesComponent implements OnInit{
  article : ArticleDto | null = null
  articleId!:number
  constructor(private articleService:ArticleService,private route: ActivatedRoute){

  }
  ngOnInit(): void {
    this.getProductDatailsId()
    console.log(this.articleId);
    
    this.fetchArticle()
  }

  fetchArticle(){
    this.articleService.getArticleById(this.articleId).subscribe((res)=>{
      this.article=res
      console.log(res);
    })
   
    
  }

  getProductDatailsId(): void {
    this.route.params.subscribe(params => {
      this.articleId = +params['id'];
    });
  }
}
