import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { QuizModel } from '../../content-creator/models/quiz.model';
import { environment } from '../../../../environments/environment';
import { User } from '../models/user.model';
import { Schedule } from '../models/schedule.model';
import { StorageService } from '../../../services/storage.service';
@Injectable({
	providedIn: 'root'
})
export class TestAdminService {
	constructor(private http: HttpClient, private storageService: StorageService) { }
	rooturl = environment.apiURl;
	quiz: QuizModel[];
	quiztakerId: string[] = null;
	formdata: Schedule;
	readonlyStatus: boolean;
	scheduleQuizUsers: string[];
	deleteUserVisibility = false;

	retriveAllQuizzes() {
		return this.http.get(this.rooturl + 'Quiz/GetAllScheduledQuiz');
	}

	retrieveAllEmployees(id: number) {
		return this.http.get(this.rooturl + 'UserSchedule/UserNotAssignedQuiz/' + id);
	}

	retrieveSpecificEmployees(sId) {
		return this.http.get(this.rooturl + 'UserSchedule/UserNotAssignedQuiz/' + sId);
	}

	postSchedule(formdata: Schedule) {
		formdata.CreatedBy = this.storageService.getStorage('uid');
		return this.http.post(this.rooturl + 'QuizSchedule/ScheduleQuiz', formdata);
	}

	postUrl(url: string) {
		return this.http.post(this.rooturl + '', url);
	}

	getSchedule(id: string) {
		return this.http.get(this.rooturl + 'QuizSchedule/GetAllQuizSchedule/' + id);
	}

	getScheduleQuizUsers(id: number) {
		return this.http.get(this.rooturl + 'UserSchedule/UserAssignedQuiz/' + id);
	}

	deleteSchedule(id: number) {
		return this.http.delete(this.rooturl + 'QuizSchedule/DeleteQuizSchedule/' + id);
	}

	deleteUserFromSchedule(QuizScheduleId: number, UserId: string) {
		return this.http.delete(this.rooturl + 'UserSchedule/UserDelete/' + QuizScheduleId + '/' + UserId);
	}

	addUserInExistingSchedule(QuizScheuleId: number, UserIds: string[]) {
		const body = {
			UserIds
		};
		return this.http.post(this.rooturl + 'UserSchedule/UserAdd/' + QuizScheuleId, UserIds);
	}

	editSchedule(QuizScheduleId, formData) {
		return this.http.put(this.rooturl + 'QuizSchedule/EditQuizSchedule/' + QuizScheduleId, formData);
	}

	getArchivedSchedules() {
		return this.http.get(this.rooturl + 'QuizSchedule/ArchivedList/' + this.storageService.getStorage('uid'));
	}

	unArchiveSchedule(id: number) {
		const body = {
			QuizScheduleId: id
		};
		return this.http.delete(this.rooturl + 'QuizSchedule/Unarchive/' + id);
	}

	getUserDetails() {
		return this.http.get(this.rooturl + 'GetUserDetails?email=' + this.storageService.getStorage('email'));
	}

	getschedulecount() {
		return this.http.get(this.rooturl + 'QuizSchedule/Stats/' + this.storageService.getStorage('uid'));
	}

}
