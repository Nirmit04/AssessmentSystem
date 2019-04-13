export class Schedule {
    ScheduleId: number;
    StartDateTime: Date;
    EndDateTime: Date;
    ArchiveStatus: boolean;
    UserId?: string[];
    QuizId: number;
    CreatedBy?: string;
}
