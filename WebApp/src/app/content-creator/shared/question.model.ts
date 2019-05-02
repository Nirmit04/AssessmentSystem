export class Question {
<<<<<<< HEAD
	QuestionId: String;
	QuestionStatement: String;
	Option1: String;
	Option2: String;
	Option3: String;
	Option4: String;
	Answer: number;
	Marks: number;
	Difficulty: String;
	SubjectId: String;
	SubjectName?: string;
	ImageName?: String;
=======
	SerialNumber? : number;
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
>>>>>>> cc36520b0297d1918419cfc2cce9acb9b3f3a165
	CreatedBy?: string;
}
