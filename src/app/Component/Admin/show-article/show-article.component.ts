import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ArticleDto } from 'src/app/dto/ArticleDto';
import { ArticleService } from 'src/app/service/article.service';

@Component({
  selector: 'app-show-article',
  templateUrl: './show-article.component.html',
  styleUrls: ['./show-article.component.css']
})
export class ShowArticleComponent implements OnInit {

  listArticle: ArticleDto[] = []; 

  constructor(private router: Router, private articleService: ArticleService) {}

  ngOnInit(): void {
    this.fetchAllArticles();
  }

  fetchAllArticles() {
    this.articleService.getAllArticles().subscribe((res: ArticleDto[]) => {
      this.listArticle = res;
      console.log(res);
    });
  }

  delete(article_id: number): void {
    this.articleService.deleteArticle(article_id).subscribe(() => {
      this.fetchAllArticles();
    });
  }

  

  update(articleId: number): void {
    this.router.navigate(['/edit-article', articleId]);
  }
}