import { Component, OnInit, Inject } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ContentCreatorServiceService } from '../shared/content-creator-service.service'
import { ToastrService } from 'ngx-toastr';
import { Subject } from '../shared/subject.model';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
@Component({
  selector: 'app-create-questions',
  templateUrl: './create-questions.component.html',
  styleUrls: ['./create-questions.component.css']
})
export class CreateQuestionsComponent implements OnInit {

  public Subjects: Subject[];
  CCreatedBy = "";

  constructor(public service: ContentCreatorServiceService, public toastr: ToastrService, ) { }
  ngOnInit() {
    this.resetForm();
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
    this.service.postQuestion(form.value).subscribe((res: any) => {
      this.toastr.success('Inserted successfully');
      console.log('gell');
      this.service.formDataNew = null;
      this.service.selectedFile = null;
      this.resetForm(form);
    });
  }



}
