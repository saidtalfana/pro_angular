import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ArticleDto } from 'src/app/dto/ArticleDto';
import { ArticleService } from 'src/app/service/article.service';

@Component({
  selector: 'app-add-article',
  templateUrl: './add-article.component.html',
  styleUrls: ['./add-article.component.css']
})
export class AddArticleComponent implements OnInit {

      formArticle  !: FormGroup;
      selectedImage !: File

  constructor(private fb: FormBuilder , private service: ArticleService) { }

  ngOnInit(): void {
  this.article()
  
  }

  article(){
    this.formArticle = this.fb.group({
      articleTitle: ['', Validators.required],
      articleContent: ['', Validators.required],
      articleAuthor: ['', Validators.required],
      articleType: ['', Validators.required],
      articleImage: ['', Validators.required]
    });
  }

  onFileChange(event: any) {
    if (event.target.files.length > 0) {
      this.selectedImage = event.target.files[0]; // Get the actual File object
    }
  }

  onSubmit() {
    const value = this.formArticle.value
   
      this.service.addArticle(value,this.selectedImage).subscribe()
      this.article()

      console.log('Article submitted:', value);

      if(value){
        alert("article added")
      }

      

      
  }

}

