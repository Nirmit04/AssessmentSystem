export class QuizModel {
    QuizId: number;
    Difficulty: string;
    TotalQuestions?: number;
    TotalMarks?: number;
    Subject: string;
    QuizType?: string;
    CreatedBy?: string;
    qId: number[];
    SubjectId: number;
}