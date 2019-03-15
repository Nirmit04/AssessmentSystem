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
  retriveAllQuizzes() {
    return this.http.get(this.rooturl + 'Quiz/GetAllQuiz');
  }
  retrieveAllEmployees() {
    return this.http.get(this.rooturl + 'User/GetUserAll');
  }
  postSchedule(formdata: Schedule) {
    formdata.UserId = this.quiztakerId;
    console.log(formdata);
  }
}
