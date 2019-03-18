import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
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
  deleteSchedule(id: number) {
    return this.http.delete(this.rooturl + 'QuizSchedule/DeleteQuizSchedule/' + id);
  }
  deleteUserFromSchedule(Id: string) {
    return this.http.delete(this.rooturl + '/' + Id);
  }
}
