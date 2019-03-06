import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ContentCreatorServiceService } from 'src/app/content-creator/shared/content-creator-service.service'
import { ToastrService } from 'ngx-toastr';
import { Subject } from 'src/app/content-creator/shared/subject.model';
@Component({
  selector: 'app-create-questions',
  templateUrl: './create-questions.component.html',
  styleUrls: ['./create-questions.component.css']
})
export class CreateQuestionsComponent implements OnInit {
  public Subjects: Subject[];
  constructor(public service: ContentCreatorServiceService, public toastr: ToastrService) { }
  ngOnInit() {
    this.resetForm();
    this.service.retrieveSubjects().subscribe(res => {
      console.log("This is here")
      this.Subjects = res as Subject[];
    });
  }

  resetForm(form?: NgForm) {
    if (form != null) {
      form.resetForm();
    }
    this.service.formData = {
      Question_ID: null,
      QuestionStatement: "",
      Option1: "",
      Option2: "",
      Option3: "",
      Option4: "",
      Answer: null,
      Marks: null,
      Difficulty: "",
      Subject_ID: "",
    }
  }
  onSubmit(form: NgForm) {
    this.service.postQuestion(form.value).subscribe(res => {
      this.toastr.success('Inserted successfully');
      this.resetForm(form);
    });;
  }
}
