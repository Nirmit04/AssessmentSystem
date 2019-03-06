import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Question } from 'src/app/content-creator/shared/question.model';
@Injectable({
  providedIn: 'root'
})
export class ContentCreatorServiceService {
  formData: Question;
  rootURL = "";
  constructor(private http: HttpClient) { }
  postQuestion(formData: Question) {
    console.log(formData);
    return this.http.post("http://demo7951933.mockable.io/hello123", formData);
  }
  retrieveSubjects() {
    return this.http.get("http://demo7951933.mockable.io/hello1231");
  }
  getQuestionsList(searchTag, difficulty) {
    return this.http.get(this.rootURL + '/getQuestions/' + searchTag + '/' + difficulty);
  }
}
