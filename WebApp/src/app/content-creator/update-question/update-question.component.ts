import { Component, OnInit, Inject } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ContentCreatorServiceService } from '../shared/content-creator-service.service'
import { ToastrService } from 'ngx-toastr';
import { Subject } from '../shared/subject.model';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
<<<<<<< HEAD
import { Router } from '@angular/router'
=======
import { environment } from '../../../environments/environment';
>>>>>>> cc36520b0297d1918419cfc2cce9acb9b3f3a165

@Component({
  selector: 'app-update-question',
  templateUrl: './update-question.component.html',
  styleUrls: ['./update-question.component.css']
})
<<<<<<< HEAD
export class UpdateQuestionComponent implements OnInit {
=======

export class UpdateQuestionComponent implements OnInit {

>>>>>>> cc36520b0297d1918419cfc2cce9acb9b3f3a165
  public Subjects: Subject[];
  public CCreatedBy = '';
  bool = false;
  label: string;
<<<<<<< HEAD
  constructor(@Inject(MAT_DIALOG_DATA) public data,
    public dialogRef: MatDialogRef<UpdateQuestionComponent>,
    public service: ContentCreatorServiceService,
    public toastr: ToastrService,
    private router: Router) { }
=======
  src: string = null;

  constructor(@Inject(MAT_DIALOG_DATA) public data,
    public dialogRef: MatDialogRef<UpdateQuestionComponent>,
    public service: ContentCreatorServiceService,
    public toastr: ToastrService) { }
>>>>>>> cc36520b0297d1918419cfc2cce9acb9b3f3a165

  ngOnInit() {
    this.bool = this.service.readonlyStatus;
    if (this.bool === true) {
      this.label = "View Question";
    } else {
      this.label = "Edit Questions";
    }
<<<<<<< HEAD
=======
    if (this.service.formData.ImageName !== null) {
      this.src = environment.imgURl + this.service.formData.ImageName;
    }
>>>>>>> cc36520b0297d1918419cfc2cce9acb9b3f3a165
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
<<<<<<< HEAD
=======
      QuestionType: "",
>>>>>>> cc36520b0297d1918419cfc2cce9acb9b3f3a165
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
<<<<<<< HEAD
    }
  }

  onSubmit(form: NgForm) {
    this.service.updateQuestion(form.value).subscribe(res => {
      this.toastr.success('Updated successfully');
      this.resetForm(form);
      // this.router.navigate(['/cc-dash'])
    });;
=======
      ImageName: null
    }
  }

  chooseFile(event) {
    this.service.selectedFile = event.target.files.item(0);
  }

  onSubmit(form: NgForm) {
    this.service.updateQuestion(form.value).subscribe(res => {
      this.toastr.success('Updated successfully');
      this.service.selectedFile = null;
      this.service.formDataNew = null;
      this.dialogRef.close('Submitted');
    });
  }

  deleteImg() {
    this.service.deleteImageFromQues(this.service.formData.QuestionId).subscribe(res => {
      this.toastr.success('Image Successfully Removed');
      this.dialogRef.close('Submitted');
    });
>>>>>>> cc36520b0297d1918419cfc2cce9acb9b3f3a165
  }

}
