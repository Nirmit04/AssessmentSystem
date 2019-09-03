export class Question {
	serialNumber?: number;
	questionType?: string;
	questionId: string;
	questionStatement: string;
	option1: string;
	option2: string;
	option3: string;
	option4: string;
	answer: number;
	marks: number;
	difficulty?: string;
	subjectId?: string;
	subjectName?: string;
	imageName?: string;
	createdBy?: string;
	Tags?: any[];
	duplicateTags?: string;
}
