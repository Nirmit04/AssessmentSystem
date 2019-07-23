import { Injectable } from '@angular/core';
import { Question } from '../models/question.model';
import { environment } from '../../../../environments/environment';
import { TagModel } from '../models/tags.model';
import { QuizModel } from '../models/quiz.model';
import { NgForm } from '@angular/forms';
import { StorageService } from '../../../services/storage.service';
import { HttpService } from '../../../core/http/http.service';
@Injectable({
	providedIn: 'root'
})
export class ContentCreatorServiceService {
	QuizState: boolean;
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
	constructor(private httpService: HttpService, private storageService: StorageService) { }

	postQuestion(formData: Question) {
		this.formDataNew = new FormData();
		formData.CreatedBy = this.storageService.getStorage('uid');
		formData.QuestionType = this.QuestionType;
		this.formDataNew.append('QuestionDetails', JSON.stringify(formData));
		if (this.selectedFile !== null) {
			this.formDataNew.append('Image', this.selectedFile, this.selectedFile.name);
			this.selectedFile = null;
		}
		this.httpService.postQuestion(this.formDataNew).subscribe((res: any) => {
			return res;
		});
		return false;
	}

	updateQuestion(formData: Question) {
		this.formDataNew = new FormData();
		this.formDataNew.append('QuestionDetails', JSON.stringify(formData));
		if (this.selectedFile !== null) {
			this.formDataNew.append('Image', this.selectedFile, this.selectedFile.name);
			this.selectedFile = null;
		}
		this.httpService.putQuestion(formData.QuestionId, this.formDataNew).subscribe((res: any) => {
			return res;
		});
		return false;
	}

	postQuestionsSelected(questions: number[]) {
		this.quizForm.QuestionIds = questions;
		this.quizForm.QuizState = this.QuizState;
		this.httpService.postSelectedQuestion(this.quizForm).subscribe((res: any) => {
			return res;
		});
		return false;
	}

	putQuestionsSelected(questions: number[]) {
		this.quizForm.QuestionIds = questions;
		this.quizForm.CreatedBy = this.storageService.getStorage('uid');
		this.httpService.putQuestionsSelected(this.storageService.getStorage('quizId'), this.quizForm.QuestionIds).subscribe((res: any) => {
			return res;
		});
		return false;
	}

}
