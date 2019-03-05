import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ContentCreatorServiceService {

  constructor(private http: HttpClient) { }

  getQuestionsList(searchTag, difficulty) {
    return this.http.get(environment.apiURl + '/getQuestions/' + searchTag + '/' + difficulty);
  }
}
