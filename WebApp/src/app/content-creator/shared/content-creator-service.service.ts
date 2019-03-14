import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Question } from '../shared/question.model';
//import { environment } from 'src/environments/environment';
import { TagModel } from './tags.model';
import { QuizModel } from './quiz.model'
@Injectable({
	providedIn: 'root'
})
export class ContentCreatorServiceService {
	tagForm: TagModel;
	formData: Question;
	quizForm: QuizModel;
	readonlyStatus: boolean;
	rootURL = 'http://201f9f2d.ngrok.io/api/';
	public createdBy;
	constructor(private http: HttpClient) { }
	postQuestion(formData: Question) {
		console.log(formData);
		return this.http.post(this.rootURL + 'Question/CreateQuestion', formData);
	}
	updateQuestion(formData: Question) {
		console.log(formData);
		return this.http.put(this.rootURL + 'Question/Edit/' + formData.QuestionId, formData);
	}
	retrieveSubjects() {
		return this.http.get(this.rootURL + 'Subject/GetSubjects');
	}
	getQuesOfUser(uid: string) {
		return this.http.get(this.rootURL + 'Question/GetQuestionByUser/' + localStorage.getItem('uid'));
	}
	deleteQues(qid) {
		console.log(qid);
		return this.http.delete(this.rootURL + '/Question/Delete/' + qid);
	}

	getTags() {
		return this.http.get(this.rootURL + 'Subject/GetSubjects/' + localStorage.getItem('uid'));
	}
	postTags(tagForm: TagModel) {
		console.log(tagForm);
		if (tagForm.SubjectId === null) {
			return this.http.post(this.rootURL + 'Subject/CreateSubject', tagForm);
		} else {
			return this.http.put(this.rootURL + 'Subject/Edit/' + tagForm.SubjectId, tagForm);
		}

	}
	deleteTags(id: number) {
		return this.http.delete(this.rootURL + '/Tag/Delete/' + id);
	}
	getQuizzes() {
		return this.http.get(this.rootURL + 'Quiz/GetQuiz/' + localStorage.getItem('uid'));
	}
	deleteQuiz(id: number) {
		return this.http.delete(this.rootURL + '/Quiz/Delete/' + id);
	}

	getQuesOfUserConstraints(form: any) {
		return this.http.get(this.rootURL + 'Question/GetQuestion/' + form.Difficulty + '/' + form.SubjectId);
	}
	postQuestionsSelected(questions: number[]) {
		this.quizForm.qId = questions;
		console.log(this.quizForm);
		return this.http.post(this.rootURL + 'Quiz/CreateQuiz', this.quizForm);
	}
	// pulkit's methods
	putQuestionsSelected(questions: number[]) {
		this.quizForm.qId = questions;
		this.quizForm.CreatedBy = localStorage.getItem('uid');
		console.log(this.quizForm);
		return this.http.put(this.rootURL + 'Quiz/CreateQuiz/' + Number(localStorage.getItem('quizId')), this.quizForm);
	}
	deleteQuesOfQuiz(id) {
		console.log(id);
		return this.http.delete(this.rootURL + 'Quiz/Question/Delete/' + Number(localStorage.getItem('quizId')) + '/' + id);
	}
	getQuestionsByQuiz(id: number) {
		return this.http.get(this.rootURL + 'Quiz/Question/' + id);
	}
	getQuizQuestions(qid: number) {
		return this.http.get(this.rootURL + 'Quiz/getType/' + qid);
	}
}
