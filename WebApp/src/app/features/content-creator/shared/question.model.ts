export class Question {
	SerialNumber?: number;
	QuestionType?: string;
	QuestionId: string;
	QuestionStatement: string;
	Option1: string;
	Option2: string;
	Option3: string;
	Option4: string;
	Answer: number;
	Marks: number;
	Difficulty?: string;
	SubjectId?: string;
	SubjectName?: string;
	ImageName?: string;
	CreatedBy?: string;
	Tags?: any[];
	DuplicateTags?: string;
}
