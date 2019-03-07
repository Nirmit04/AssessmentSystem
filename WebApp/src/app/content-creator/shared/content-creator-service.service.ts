import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Question } from 'src/app/content-creator/shared/question.model';
import { environment } from 'src/environments/environment';
@Injectable({
	providedIn: 'root'
})
export class ContentCreatorServiceService {
	formData: Question;
	rootURL = '';
	constructor(private http: HttpClient) {}
	postQuestion(formData: Question) {
		console.log(formData);
		return this.http.post('http://demo7951933.mockable.io/hello123', formData);
	}
	retrieveSubjects() {
		return this.http.get('http://demo7951933.mockable.io/hello1231');
	}

	getQuestionList() {
		return this.http.get(environment.apiURl + '/Question/User/1');
	}
	deleteOrder(id: number) {
		return this.http.delete(environment.apiURl + '/Question/Delete/' + id);
	}
}
