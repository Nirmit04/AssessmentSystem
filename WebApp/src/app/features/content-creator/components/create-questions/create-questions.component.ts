import { Component, OnInit, Inject } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ContentCreatorServiceService } from '../../services/content-creator-service.service'
import { ToastrService } from 'ngx-toastr';
import { Subject } from '../../models/subject.model';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { HttpService } from '../../../../core/http/http.service';
@Component({
  selector: 'app-create-questions',
  templateUrl: './create-questions.component.html',
  styleUrls: ['./create-questions.component.css']
})
export class CreateQuestionsComponent implements OnInit {

  public Subjects123: Subject[];
  CCreatedBy = "";
  boolea = false;
  dropdownSettings = {};
  constructor(public service: ContentCreatorServiceService,
    public toastr: ToastrService,
    private router: Router,
    private httpService: HttpService) { }
  ngOnInit() {
    this.resetForm();
    if (this.service.Difficulty != null) {
      this.boolea = true;
      this.service.formData.SubjectId = this.service.SubjectId.toString();
      this.service.formData.Difficulty = this.service.Difficulty;
    }
    else {
      if (this.service.QuestionType == null) {
        this.router.navigate(['/cc-dash'])
      }
    }
    this.dropdownSettings = {
      singleSelection: false,
      idField: 'SubjectId',
      textField: 'Name',
      enableCheckAll: false,
      itemsShowLimit: 5,
      allowSearchFilter: true,
    };
    this.httpService.retrieveSubjects().subscribe(res => {
      this.Subjects123 = res as Subject[];
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
    const response = this.service.postQuestion(form.value);
    if (response) {
      this.toastr.success('Inserted successfully');
      this.service.selectedFile = null;
      this.resetForm(form);
      if (this.service.Difficulty != null) {
        this.service.formData.SubjectId = this.service.SubjectId.toString();
        this.service.formData.Difficulty = this.service.Difficulty;
      }
    }
  }
}