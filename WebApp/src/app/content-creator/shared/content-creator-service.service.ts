import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Question } from '../shared/question.model';
import { environment } from 'src/environments/environment';
import { TagModel } from './tags.model';
import { QuizModel } from './quiz.model';
import { NgForOf } from '@angular/common';
import { NgForm } from '@angular/forms';
@Injectable({
	providedIn: 'root'
})
export class ContentCreatorServiceService {
	tagForm: TagModel;
	formData: Question;
	quizForm: QuizModel;
	readonlyStatus: boolean;
	rootURL = environment.apiURl;
	quesStat: boolean = false;
	public createdBy;
public formDupli: NgForm;
	constructor(private http: HttpClient) { }
	postQuestion(formData: Question) {
		// const formData1 = new FormData();
		// formData1.append('data',formData);
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
		return this.http.get(this.rootURL + 'Question/GetuestionByUser/' + localStorage.getItem('uid'));
	}
	deleteQues(qid) {
		console.log(qid);
		return this.http.delete(this.rootURL + '/Question/Delete/' + qid);
	}
	getArchivedQuizzes() {
		return this.http.get(this.rootURL + 'Quiz/Archived/' + localStorage.getItem('uid'));
	}
	unArchiveQuiz(id: number) {
		console.log(id);
		return this.http.put(this.rootURL + '/Quiz/UnArchive', id);
	}

	getTags() {
		return this.http.get(this.rootURL + 'Subject/GetSubjects/' + localStorage.getItem('uid'));
	}
	postTags(tagForm: TagModel) {
		// console.log(tagForm);
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
		this.quizForm.QuestionIds = questions;
		console.log(this.quizForm);
		return this.http.post(this.rootURL + 'Quiz/CreateQuiz', this.quizForm);
	}
	// pulkit's methods
	putQuestionsSelected(questions: number[]) {
		this.quizForm.QuestionIds = questions;
		this.quizForm.CreatedBy = localStorage.getItem('uid');
		console.log(this.quizForm.QuestionIds);
		return this.http.put(this.rootURL + 'Quiz/EditQuiz/AddQuestion/' + Number(localStorage.getItem('quizId')), this.quizForm.QuestionIds);
	}
	deleteQuesOfQuiz(id) {
		console.log(id);
		return this.http.delete(
			this.rootURL + 'Quiz/QuizQuestion/Delete/' + Number(localStorage.getItem('quizId')) + '/' + id
		);
	}
	getQuestionsByQuiz(id: number) {
		return this.http.get(this.rootURL + 'Quiz/QuizQuestion/' + id);
	}
	getQuizQuestions(qid: number) {
		return this.http.get(this.rootURL + 'Quiz/GetQuestionsNotInQuiz/' + qid);
	}

	getUserDetails() {
		console.log(localStorage.getItem('email'));
		return this.http.get(this.rootURL + 'GetUserDetails?email=' + localStorage.getItem('email'));
	}

	getUserProgress() {
		console.log(localStorage.getItem('uid'));
		return this.http.get(this.rootURL + 'Stats/' + localStorage.getItem('uid'));
	}
}
