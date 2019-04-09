import { Component, OnInit, Inject } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ContentCreatorServiceService } from '../shared/content-creator-service.service'
import { ToastrService } from 'ngx-toastr';
import { Subject } from '../shared/subject.model';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router'
import { environment } from 'src/environments/environment';
import { servicesVersion } from 'typescript';

@Component({
  selector: 'app-update-question',
  templateUrl: './update-question.component.html',
  styleUrls: ['./update-question.component.css']
})

export class UpdateQuestionComponent implements OnInit {

  public Subjects: Subject[];
  public CCreatedBy = '';
  bool = false;
  label: string;
  src: string = null;

  constructor(@Inject(MAT_DIALOG_DATA) public data,
    public dialogRef: MatDialogRef<UpdateQuestionComponent>,
    public service: ContentCreatorServiceService,
    public toastr: ToastrService,
    private router: Router) { }

  ngOnInit() {
    this.bool = this.service.readonlyStatus;
    if (this.bool === true) {
      this.label = "View Question";
    } else {
      this.label = "Edit Questions";
    }
    if (this.service.formData.ImageName !== null) {
      this.src = "http://f96d4d43.ngrok.io/Images/" + this.service.formData.ImageName;
    }
    this.CCreatedBy = localStorage.getItem('uid');
    this.service.retrieveSubjects().subscribe(res => {
      this.Subjects = res as Subject[];
    });
  }

  resetForm(form?: NgForm) {
    if (form != null) {
      form.resetForm();
    }
    this.service.formData = {
      QuestionType: "",
      QuestionId: null,
      QuestionStatement: "",
      Option1: "",
      Option2: "",
      Option3: "",
      Option4: "",
      Answer: null,
      Marks: null,
      Difficulty: "",
      SubjectId: "",
    }
  }

  onSubmit(form: NgForm) {
    this.service.updateQuestion(form.value).subscribe(res => {
      this.toastr.success('Updated successfully');
      this.dialogRef.close('Submitted');
    });
  }

}
