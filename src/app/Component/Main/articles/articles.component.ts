import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ArticleDto } from 'src/app/dto/ArticleDto';
import { ArticleService } from 'src/app/service/article.service';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.css']
})
export class ArticlesComponent implements OnInit {

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
  showDetails(id: number): void {
    this.router.navigate(['main/article_details', id]);
  }
}