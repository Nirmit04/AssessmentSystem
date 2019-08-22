import { Component, OnInit } from '@angular/core';
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
  /* This class is used for creating questions by the content-creator */

  public subjects: Subject[];
  public createdBy: string;
  dropdownSettings: object;

  constructor(
    public service: ContentCreatorService,
    public toastr: ToastrService,
    private router: Router,
    private httpService: HttpService) {
    this.createdBy = '';
    this.dropdownSettings = {};
  }

  public ngOnInit() {
    this.resetForm(); // to reset the create questions form
    if (this.service.difficulty !== null) {
      /* this is used when the user wants to add questions to a particular quiz, by clicking 'Edit Quiz' */
      this.service.formData.subjectId = this.service.subjectId.toString();
      this.service.formData.difficulty = this.service.difficulty;
    } else {
      /* this is used when the user is adding questions generally to the question bank */
      if (this.service.questionType == null) {
        this.router.navigate(['/cc-dash']);
      }
    }
    this.dropdownSettings = {
      /* setting up the multiple-choice drop-down for the subjects */
      singleSelection: false,
      idField: 'SubjectId',
      textField: 'Name',
      enableCheckAll: false,
      itemsShowLimit: 5,
      allowSearchFilter: true,
    };
    this.httpService.retrieveSubjects().subscribe(res => {
      /* retrieving all the subjects from the back-end */
      this.subjects = res as Subject[];
    });
  }

  private resetForm(form?: NgForm): void {
    /* this is used to reset the create questions form once the user presses the reset button, refreshes the page or once the details have been submitted */
    if (form !== null) {
      form.resetForm();
    }
    this.service.formData = {
      questionId: null,
      questionStatement: '',
      option1: '',
      option2: '',
      option3: '',
      option4: '',
      answer: null,
      marks: null,
      difficulty: '',
      subjectId: '',
    };
  }

  public chooseFile(event): void {
    /* uploading image for the question */
    this.service.selectedFile = event.target.files.item(0);
  }

  public onSubmit(form: NgForm): void {
    /* submitting the form details to the backend by pressing the 'Submit' button */
    const response = this.service.postQuestion(form.value); // posting the form to the backend through a service helper function
    if (response) {
      this.toastr.success('Inserted successfully');
      this.service.selectedFile = null;
      this.resetForm(form); // calling the resetForm function to reset the form
      if (this.service.difficulty !== null) {
        /* picking up details of the subject and difficulty for adding questions to a particular quiz, even after adding a question */
        this.service.formData.subjectId = this.service.subjectId.toString();
        this.service.formData.difficulty = this.service.difficulty;
      }
    }
  }
}