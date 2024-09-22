import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ArticleDto } from '../dto/ArticleDto';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ArticleService {


    private     API_ARTICLE = 'http://localhost:1998/api/article';


  constructor(private http:HttpClient) { }


  
 //  <?----------------------------------ARTICLE -------------------------------------->
                    
                     //  <?--------------add  ------------------->

                     addArticle(articleDto :ArticleDto,articleImage: File):Observable<ArticleDto>{


                      const formData = new FormData();
                      formData.append('articleTitle', articleDto.articleTitle);
                      formData.append('articleContent', articleDto.articleContent);
                      formData.append('articleAuthor', articleDto.articleAuthor);
                      formData.append('articleType', articleDto.articleType);
                      formData.append('articleImage',articleImage);
                      


                        return this.http.post<ArticleDto>(`${this.API_ARTICLE}/add_article`,formData)
                          }
  
                         //  <?--------------fetch  ------------------->

                   getAllArticles():Observable<ArticleDto[]>{
                              return this.http.get<ArticleDto[]>(`${this.API_ARTICLE}/get_articles`)                   
                             }
  
                         //  <?--------------delete  ------------------->

                      deleteArticle(article_id:number):Observable<ArticleDto>{
                            return this.http.delete<ArticleDto>(`${this.API_ARTICLE}/delete_article/${article_id}`)}
  
                            //  <?--------------get ------------------->
                            
                     getArticleById(article_id  : number):Observable<ArticleDto>{
                      return this.http.get<ArticleDto>(`${this.API_ARTICLE}/get_article/${article_id}`)
                     }
  
  
                         //  <?--------------update ------------------->
                         updateArticle(articleDto : ArticleDto):Observable<ArticleDto>{
                          return this.http.put<ArticleDto>(`${this.API_ARTICLE}/update_article`,articleDto)
                        }
  
                    



  
                    


}