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
	public questionType: string = null;
	public difficulty: string = null;
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

	public postQuestion(formData: Question): Promise<any> {
		this.formDataNew = new FormData();
		formData.createdBy = this.storageService.getStorage('uid');
		formData.questionType = this.questionType;
		this.formDataNew.append('QuestionDetails', JSON.stringify(formData));
		if (this.selectedFile !== null) {
			this.formDataNew.append('Image', this.selectedFile, this.selectedFile.name);
			this.selectedFile = null;
		}
		return this.httpService.postQuestion(this.formDataNew).toPromise();

	}

	public updateQuestion(formData: Question): any {
		this.formDataNew = new FormData();
		this.formDataNew.append('QuestionDetails', JSON.stringify(formData));
		if (this.selectedFile !== null) {
			this.formDataNew.append('Image', this.selectedFile, this.selectedFile.name);
			this.selectedFile = null;
		}
		this.httpService.putQuestion(formData.questionId, this.formDataNew).subscribe((res: any) => {
			return true;
		});
		return false;
	}

	public postQuestionsSelected(questions: number[]): any {
		this.quizForm.QuestionIds = questions;
		this.quizForm.QuizState = this.quizState;
		this.httpService.postSelectedQuestion(this.quizForm).subscribe((res: any) => {
		});
		return false;
	}

	public putQuestionsSelected(questions: number[]): any {
		this.quizForm.QuestionIds = questions;
		this.quizForm.CreatedBy = this.storageService.getStorage('uid');
		this.httpService.putQuestionsSelected(this.storageService.getStorage('quizId'), this.quizForm.QuestionIds).subscribe((res: any) => {
			return true;
		});
		return false;
	}

}
