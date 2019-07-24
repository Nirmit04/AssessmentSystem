import { Injectable } from '@angular/core';
import { StorageService } from '../../services/storage.service';
import { environment } from '../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { EmployeeService } from '../../features/employee/services/employee.service';
import { TagModel } from '../../features/content-creator/models/tags.model';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  private rootURL = environment.apiURl;

  constructor(private http: HttpClient, private storageService: StorageService, private employeeService: EmployeeService) { }

  getNonMocks() {
    return this.http.get(this.rootURL + 'Employee/Scheduled/' + this.storageService.getStorage('uid'));
  }

  getQuesOfQuiz(QuizId: number) {
    return this.http.get(this.rootURL + 'Quiz/QuizQuestion?QuizId=' + QuizId + '&UserId=' + this.storageService.getStorage('uid'));
  }

  postQuesOfQuiz(body: any) {
    return this.http.put(this.rootURL + 'Quiz/SubmitQuestion', body);
  }

  getMockQuesOfQuiz(QuizId: number) {
    return this.http.get(this.rootURL + 'Quiz/QuizQuestion?QuizId=' + QuizId + '&UserId=' + this.storageService.getStorage('uid'));
  }

  checkValidUser(UserId: number) {
    return this.http.post(this.rootURL + 'UserSchedule/ValidQuizTaker/' + this.storageService.getStorage('uid'), UserId);
  }

  getQuestions(quizId: number, index: number) {
    return this.http.get(this.rootURL + 'Quiz/GetQuizQuestion?QuizId=' + quizId + '&UserId=' + this.storageService.getStorage('uid') + '&Index=' + index);
  }

  postanswers(body: any) {
    return this.http.post(this.rootURL + 'Quiz/SubmitQuiz', body);
  }

  getUserDetails() {
    return this.http.get(this.rootURL + 'GetUserDetails?email=' + this.storageService.getStorage('email'));
  }

  getListOfMockQuizzes() {
    return this.http.get(this.rootURL + 'Quiz/MockQuiz');
  }

  getEmployeeProgress() {
    return this.http.get(this.rootURL + '/Employee/Stats/' + this.storageService.getStorage('uid'))
  }

  getContentCreatorProgress() {
    return this.http.get(this.rootURL + 'Stats/' + this.storageService.getStorage('uid'));
  }

  getReportOfNonMockQuiz(userId: number) {
    return this.http.get(this.rootURL + 'Report/Scheduled/' + userId);
  }

  getReportOfMockQuiz(quizId: number) {
    return this.http.get(this.rootURL + 'Report/Mock/' + quizId);
  }

  getDetailedReport() {
    return this.http.get(this.rootURL + '/DetailedReport/' + this.storageService.getStorage('uid') + '/' + this.employeeService.quizId);
  }

  getQues(questionId: number) {
    return this.http.get(this.rootURL + 'Question/' + questionId)
  }

  getAnswers() {
    return this.http.get(this.rootURL + 'Quiz/SubmitMockQuiz/' + this.employeeService.quizId);
  }

  retrieveQuizNames() {
    return this.http.get(this.rootURL + 'Quiz/GetAllQuizName');
  }

  postSelectedQuestion(form: any) {
    return this.http.post(this.rootURL + 'Quiz/CreateQuiz', form);
  }

  putQuestionsSelected(quizId: string, questionIds: any[]) {
    return this.http.put(this.rootURL + 'Quiz/EditQuiz/AddQuestion/' + quizId, questionIds);
  }

  postQuestion(form: any) {
    return this.http.post(this.rootURL + 'Question/CreateQuestion', form);
  }

  putQuestion(questionId: string, form: any) {
    return this.http.put(this.rootURL + 'Question/Edit/' + questionId, form);
  }

  retrieveSubjects() {
    return this.http.get(this.rootURL + 'Subject/GetSubjects');
  }

  getQuesOfUser() {
    return this.http.get(this.rootURL + 'Question/GetQuestionByUser/' + this.storageService.getStorage('uid'));
  }

  deleteQues(questionId: number) {
    return this.http.delete(this.rootURL + '/Question/Delete/' + questionId);
  }

  getArchivedQuizzes() {
    return this.http.get(this.rootURL + 'Quiz/Archived/' + this.storageService.getStorage('uid'));
  }

  unArchiveQuiz(quizId: number) {
    return this.http.put(this.rootURL + '/Quiz/UnArchive', quizId);
  }

  getTags() {
    return this.http.get(this.rootURL + 'Subject/GetSubjects/' + this.storageService.getStorage('uid'));
  }

  postTags(tagForm: TagModel) {
    if (tagForm.subjectId === null) {
      return this.http.post(this.rootURL + 'Subject/CreateSubject', tagForm);
    } else {
      return this.http.put(this.rootURL + 'Subject/Edit/' + tagForm.subjectId, tagForm);
    }
  }

  deleteTags(tagId: number) {
    return this.http.delete(this.rootURL + '/Tag/Delete/' + tagId);
  }

  getQuizzes() {
    return this.http.get(this.rootURL + 'Quiz/GetQuiz/' + this.storageService.getStorage('uid'));
  }

  deleteQuiz(quizId: number) {
    return this.http.delete(this.rootURL + '/Quiz/Delete/' + quizId);
  }

  getQuesOfUserConstraints(form: any) {
    const body = {
      Tags: form.tags,
      Difficulty: form.difficulty,
      QuestionType: form.quizType,
    }
    return this.http.post(this.rootURL + 'Question/GetQuestion', body);
  }
  generateRandom(form: any, question: number) {
    return this.http.post(this.rootURL + 'Quiz/GetRandomQuestion?TotalQuestion=' + question, form);
  }

  deleteQuesOfQuiz(questionId: number) {
    return this.http.delete(
      this.rootURL + 'Quiz/QuizQuestion/Delete/' + Number(this.storageService.getStorage('quizId')) + '/' + questionId);
  }

  getQuestionsByQuiz(quizId: number) {
    return this.http.get(this.rootURL + 'Quiz/QuizQuestion?QuizId=' + quizId);
  }

  getQuizQuestions(quizId: number) {
    return this.http.get(this.rootURL + 'Quiz/GetQuestionsNotInQuiz/' + quizId);
  }

  deleteImageFromQues(questionId) {
    return this.http.delete(this.rootURL + 'Question/ImageDelete/' + questionId);
  }
}
