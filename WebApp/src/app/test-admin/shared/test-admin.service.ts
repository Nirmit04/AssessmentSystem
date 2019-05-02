import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
<<<<<<< HEAD
import { QuizModel } from '../../content-creator/shared/quiz.model'
import { environment } from 'src/environments/environment';
import { User } from 'src/app/test-admin/shared/user.model'
import { Schedule } from 'src/app/test-admin/shared/schedule.model';
@Injectable({
  providedIn: 'root'
})
export class TestAdminService {

  constructor(private http: HttpClient) { }
  rooturl = environment.apiURl;
  quiz: QuizModel[];
  quiztakerId: string[] = null;
  formdata: Schedule;
  readonlyStatus: boolean;
  scheduleQuizUsers: string[];
  retriveAllQuizzes() {
    return this.http.get(this.rooturl + 'Quiz/GetAllQuiz');
  }
  retrieveAllEmployees() {
    return this.http.get(this.rooturl + 'User/GetUserAll');
  }
  retrieveSpecificEmployees(sId) {
    return this.http.get(this.rooturl + 'User/GetUserSpecific/' + sId);
  }
  postSchedule(formdata: Schedule) {
    formdata.UserId = this.quiztakerId;
    console.log(formdata);
    return this.http.post(this.rooturl + 'QuizSchedule/ScheduleQuiz', formdata);
  }
  getSchedule(id: string) {
    return this.http.get(this.rooturl + 'QuizSchedule/GetAllQuizSchedule/' + id);
  }
  getScheduleQuizUsers(id: number) {
    console.log(1);
    return this.http.get(this.rooturl + 'UserSchedule/UserAssignedQuiz/' + id);
  }
  deleteSchedule(id: string) {
    return this.http.delete(this.rooturl + '/' + id);
  }
=======
import { QuizModel } from '../../content-creator/shared/quiz.model';
import { environment } from '../../../environments/environment';
import { User } from '../shared/user.model';
import { Schedule } from '../shared/schedule.model';
@Injectable({
	providedIn: 'root'
})
export class TestAdminService {
	constructor(private http: HttpClient) { }
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
		formdata.CreatedBy = localStorage.getItem('uid');
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
		return this.http.get(this.rooturl + 'QuizSchedule/ArchivedList/' + localStorage.getItem('uid'));
	}

	unArchiveSchedule(id: number) {
		const body = {
			QuizScheduleId: id
		};
		return this.http.delete(this.rooturl + 'QuizSchedule/Unarchive/' + id);
	}

	getUserDetails() {
		return this.http.get(this.rooturl + 'GetUserDetails?email=' + localStorage.getItem('email'));
	}

	getschedulecount() {
		return this.http.get(this.rooturl + 'QuizSchedule/Stats/' + localStorage.getItem('uid'));
	}

>>>>>>> cc36520b0297d1918419cfc2cce9acb9b3f3a165
}
