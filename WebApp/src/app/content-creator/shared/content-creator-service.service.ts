import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Question } from '../shared/question.model';
import { environment } from '../../../environments/environment';
import { TagModel } from './tags.model';
import { QuizModel } from './quiz.model';
import { NgForm } from '@angular/forms';
@Injectable({
	providedIn: 'root'
})
export class ContentCreatorServiceService {

	QuestionType: string;
	Difficulty: string;
	SubjectId: number;
	tagForm: TagModel;
	formData: Question;
	formDataNew: FormData;
	quizForm: QuizModel = null;
	readonlyStatus: boolean;
	QuizHour: number;
	QuizMinute: number;
	rootURL = environment.apiURl;
	quesStat: boolean = false;
	public createdBy;
	public formDupli: NgForm;
	selectedFile: File = null;
	constructor(private http: HttpClient) { }

	postQuestion(formData: Question) {
		this.formDataNew = new FormData();
		formData.CreatedBy = localStorage.getItem('uid');
		formData.QuestionType = this.QuestionType;
		this.formDataNew.append('QuestionDetails', JSON.stringify(formData));
		if (this.selectedFile !== null) {
			this.formDataNew.append('Image', this.selectedFile, this.selectedFile.name);
			this.selectedFile = null;
		}
		return this.http.post(this.rootURL + 'Question/CreateQuestion', this.formDataNew);
	}

	retrieveQuizNames() {
		return this.http.get(this.rootURL + 'Quiz/GetAllQuizName');
	}

	updateQuestion(formData: Question) {
		console.log(formData);
		this.formDataNew = new FormData();
		this.formDataNew.append('QuestionDetails', JSON.stringify(formData));
		if (this.selectedFile !== null) {
			this.formDataNew.append('Image', this.selectedFile, this.selectedFile.name);
			this.selectedFile = null;
		}
		return this.http.put(this.rootURL + 'Question/Edit/' + formData.QuestionId, this.formDataNew);
	}

	retrieveSubjects() {
		return this.http.get(this.rootURL + 'Subject/GetSubjects');
	}

	getQuesOfUser(uid: string) {
		return this.http.get(this.rootURL + 'Question/GetQuestionByUser/' + localStorage.getItem('uid'));
	}

	deleteQues(qid) {
		return this.http.delete(this.rootURL + '/Question/Delete/' + qid);
	}

	getArchivedQuizzes() {
		return this.http.get(this.rootURL + 'Quiz/Archived/' + localStorage.getItem('uid'));
	}

	unArchiveQuiz(id: number) {
		return this.http.put(this.rootURL + '/Quiz/UnArchive', id);
	}

	getTags() {
		return this.http.get(this.rootURL + 'Subject/GetSubjects/' + localStorage.getItem('uid'));
	}

	postTags(tagForm: TagModel) {
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
		console.log(form);
		const body = {
			Tags: form.Tags,
			Difficulty:form.Difficulty,
			QuestionType:form.QuizType,
		}
		console.log(body);
		return this.http.post(this.rootURL + 'Question/GetQuestion', body);
	}
	generateRandom(form: any, question: number) {
		return this.http.post(this.rootURL + 'Quiz/GetRandomQuestion?TotalQuestion=' + question, form);
	}
	postQuestionsSelected(questions: number[]) {
		this.quizForm.QuestionIds = questions;
		console.log(this.quizForm);
		return this.http.post(this.rootURL + 'Quiz/CreateQuiz', this.quizForm);
	}

	putQuestionsSelected(questions: number[]) {
		this.quizForm.QuestionIds = questions;
		this.quizForm.CreatedBy = localStorage.getItem('uid');
		return this.http.put(this.rootURL + 'Quiz/EditQuiz/AddQuestion/' + Number(localStorage.getItem('quizId')), this.quizForm.QuestionIds);
	}

	deleteQuesOfQuiz(id) {
		return this.http.delete(
			this.rootURL + 'Quiz/QuizQuestion/Delete/' + Number(localStorage.getItem('quizId')) + '/' + id
		);
	}

	getQuestionsByQuiz(id: number) {
		return this.http.get(this.rootURL + 'Quiz/QuizQuestion?QuizId=' + id);
	}

	getQuizQuestions(qid: number) {
		return this.http.get(this.rootURL + 'Quiz/GetQuestionsNotInQuiz/' + qid);
	}

	getUserDetails() {
		return this.http.get(this.rootURL + 'GetUserDetails?email=' + localStorage.getItem('email'));
	}

	getUserProgress() {
		return this.http.get(this.rootURL + 'Stats/' + localStorage.getItem('uid'));
	}

	deleteImageFromQues(id) {
		return this.http.delete(this.rootURL + 'Question/ImageDelete/' + id);
	}

}
