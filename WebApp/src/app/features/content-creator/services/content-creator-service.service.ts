import { Injectable } from '@angular/core';
import { Question } from '../models/question.model';
import { TagModel } from '../models/tags.model';
import { QuizModel } from '../models/quiz.model';
import { NgForm } from '@angular/forms';
import { StorageService } from '../../../services/storage.service';
import { HttpService } from '../../../core/http/http.service';
@Injectable({
	providedIn: 'root'
})
export class ContentCreatorService {
	public quizState: boolean;
	public questionType: string;
	public difficulty: string;
	public subjectId: number;
	public tagForm: TagModel;
	public formData: Question;
	public formDataNew: FormData;
	public quizForm: QuizModel = null;
	public readonlyStatus: boolean;
	public quizHour: number;
	public quizMinute: number;
	public quesStat: boolean = false;
	public createdBy;
	public formDupli: NgForm;
	public selectedFile: File = null;

	constructor(private httpService: HttpService, private storageService: StorageService) { }

	public postQuestion(formData: Question): any {
		this.formDataNew = new FormData();
		formData.CreatedBy = this.storageService.getStorage('uid');
		formData.QuestionType = this.questionType;
		this.formDataNew.append('QuestionDetails', JSON.stringify(formData));
		if (this.selectedFile !== null) {
			this.formDataNew.append('Image', this.selectedFile, this.selectedFile.name);
			this.selectedFile = null;
		}
		const subscription = this.httpService.postQuestion(this.formDataNew).subscribe((res: any) => {
			return true;
		});
		subscription.unsubscribe();
		return false;
	}

	public updateQuestion(formData: Question): any {
		this.formDataNew = new FormData();
		this.formDataNew.append('QuestionDetails', JSON.stringify(formData));
		if (this.selectedFile !== null) {
			this.formDataNew.append('Image', this.selectedFile, this.selectedFile.name);
			this.selectedFile = null;
		}
		const subscription = this.httpService.putQuestion(formData.QuestionId, this.formDataNew).subscribe((res: any) => {
			return true;
		});
		subscription.unsubscribe();
		return false;
	}

	public postQuestionsSelected(questions: number[]): any {
		this.quizForm.QuestionIds = questions;
		this.quizForm.QuizState = this.quizState;
		const subscription = this.httpService.postSelectedQuestion(this.quizForm).subscribe((res: any) => {
		});
		subscription.unsubscribe();
		return false;
	}

	public putQuestionsSelected(questions: number[]): any {
		this.quizForm.QuestionIds = questions;
		this.quizForm.CreatedBy = this.storageService.getStorage('uid');
		const subscription = this.httpService.putQuestionsSelected(this.storageService.getStorage('quizId'), this.quizForm.QuestionIds).subscribe((res: any) => {
			return true;
		});

		subscription.unsubscribe();
		return false;
	}

}
