export class QuizModel {
    serialNumber?: number;
    quizId: number;
    difficulty: string;
    totalQuestions?: number;
    totalMarks?: number;
    tags:any[];
    quizType: string;
    createdBy?: string;
    questionIds: number[];
    subjectId: number;
    quizName: string;
    quizTime?: string;
    quizState?:boolean;
    minCutOff:number;
    duplicateTags?:string;
}