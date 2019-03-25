import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ReportingUserService } from '../../shared/reporting-user.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  quizData: any;

  constructor(@Inject(MAT_DIALOG_DATA) public data,
    public dialogRef: MatDialogRef<DetailsComponent>,
    public service: ReportingUserService) { }

  ngOnInit() {
    console.log(this.data);
    this.getDetails(this.data.QuizId);
  }

  getDetails(id: string) {
    this.service.getQuizAnalysis(id).subscribe((res: any) => {
      this.quizData = res;
      console.log('i am here');
      console.log(this.quizData);
    })
  }

}