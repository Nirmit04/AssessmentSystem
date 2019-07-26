export class QuizModel {
	SerialNumber?: number;
	QuizId: number;
	Difficulty: string;
	TotalQuestions?: number;
	TotalMarks?: number;
	Tags: any[];
	QuizType: string;
	CreatedBy?: string;
	QuestionIds: number[];
	SubjectId: number;
	QuizName: string;
	QuizTime?: string;
	QuizState?: boolean;
	MinCutOff: number;
	Tags1?: string;
}
