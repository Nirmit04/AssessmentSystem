import { Component, OnInit, Inject } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ContentCreatorService } from '../../services/content-creator-service.service'
import { ToastrService } from 'ngx-toastr';
import { Subject } from '../../models/subject.model';
import { Router } from '@angular/router';
import { HttpService } from '../../../../core/http/http.service';

@Component({
  selector: 'app-create-questions',
  templateUrl: './create-questions.component.html',
  styleUrls: ['./create-questions.component.css']
})

export class CreateQuestionsComponent implements OnInit {

  public subjects: Subject[];
  public createdBy: string = '';
  dropdownSettings = {};

  constructor(public service: ContentCreatorService,
    public toastr: ToastrService,
    private router: Router,
    private httpService: HttpService) { }

  ngOnInit(): void {
    this.resetForm();
    if (this.service.difficulty != null) {
      this.service.formData.SubjectId = this.service.subjectId.toString();
      this.service.formData.Difficulty = this.service.difficulty;
    }
    else {
      if (this.service.questionType == null) {
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
      this.subjects = res as Subject[];
    });
  }

  private resetForm(form?: NgForm): void {
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

  public chooseFile(event): void {
    this.service.selectedFile = event.target.files.item(0);
  }

  public onSubmit(form: NgForm): void {
    const response = this.service.postQuestion(form.value);
    if (response) {
      this.toastr.success('Inserted successfully');
      this.service.selectedFile = null;
      this.resetForm(form);
      if (this.service.difficulty != null) {
        this.service.formData.SubjectId = this.service.subjectId.toString();
        this.service.formData.Difficulty = this.service.difficulty;
      }
    }
  }
}