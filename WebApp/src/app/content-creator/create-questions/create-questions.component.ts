import { Component, OnInit, Inject } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ContentCreatorServiceService } from '../shared/content-creator-service.service'
import { ToastrService } from 'ngx-toastr';
import { Subject } from '../shared/subject.model';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
@Component({
  selector: 'app-create-questions',
  templateUrl: './create-questions.component.html',
  styleUrls: ['./create-questions.component.css']
})
export class CreateQuestionsComponent implements OnInit {

  public Subjects: Subject[];
  CCreatedBy = "";
  boolea = false;
  constructor(public service: ContentCreatorServiceService, public toastr: ToastrService, private router: Router) { }
  ngOnInit() {
    this.resetForm();
    if (localStorage.getItem('Difficulty') != null) {
      this.boolea = true;
      this.service.formData.SubjectId = localStorage.getItem('SubjectId');
      this.service.formData.Difficulty = localStorage.getItem('Difficulty');
      this.service.QuestionType = localStorage.getItem('Question_Type');
    }
    else {
      if (this.service.QuestionType == null) {
        this.router.navigate(['/cc-dash'])
      }
    }
    this.service.retrieveSubjects().subscribe(res => {
      this.Subjects = res as Subject[];
    });

  }

  resetForm(form?: NgForm) {
    if (form != null) {
      form.resetForm();
    }
    this.service.formData = {
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

  chooseFile(event) {
    this.service.selectedFile = event.target.files.item(0);
  }

  onSubmit(form: NgForm) {
    console.log(form.value);
    this.service.postQuestion(form.value).subscribe((res: any) => {
      this.toastr.success('Inserted successfully');
      this.service.selectedFile = null;
      this.resetForm(form);
    });
  }



}