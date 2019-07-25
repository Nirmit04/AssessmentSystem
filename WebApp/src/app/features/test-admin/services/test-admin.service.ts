import { Injectable } from '@angular/core';
import { QuizModel } from '../../content-creator/models/quiz.model';
import { Schedule } from '../models/schedule.model';

@Injectable({
	providedIn: 'root'
})
export class TestAdminService {

	constructor() { }

	public quiz: QuizModel[];
	public quiztakerId: string[] = null;
	public formdata: Schedule;
	public readonlyStatus: boolean;
	public scheduleQuizUsers: string[];
	public deleteUserVisibility = false;

}
