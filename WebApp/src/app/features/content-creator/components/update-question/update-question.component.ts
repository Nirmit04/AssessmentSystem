import { Component, OnInit, Inject } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ContentCreatorServiceService } from '../../services/content-creator-service.service'
import { ToastrService } from 'ngx-toastr';
import { Subject } from '../../models/subject.model';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { environment } from '../../../../../environments/environment';
import { StorageService } from '../../../../services/storage.service';
import { HttpService } from '../../../../core/http/http.service';

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
  dropdownSettings = null;

  constructor(@Inject(MAT_DIALOG_DATA) public data,
    public dialogRef: MatDialogRef<UpdateQuestionComponent>,
    public service: ContentCreatorServiceService,
    private storageService: StorageService,
    public toastr: ToastrService,
    private httpService: HttpService) { }

  ngOnInit() {
    this.bool = this.service.readonlyStatus;
    if (this.bool === true) {
      this.label = "View Question";
    } else {
      this.label = "Edit Questions";
    }
    if (this.service.formData.ImageName !== null) {
      this.src = environment.imgURl + this.service.formData.ImageName;
    }
    this.dropdownSettings = {
      singleSelection: false,
      idField: 'SubjectId',
      textField: 'Name',
      enableCheckAll: false,
      itemsShowLimit: 5,
      allowSearchFilter: true,
    };
    this.CCreatedBy = this.storageService.getStorage('uid');
    this.httpService.retrieveSubjects().subscribe(res => {
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
      ImageName: null
    }
  }

  chooseFile(event) {
    this.service.selectedFile = event.target.files.item(0);
  }

  onSubmit(form: NgForm) {
    const response = this.service.updateQuestion(form.value);
    if (response) {
      this.toastr.success('Updated successfully');
      this.service.selectedFile = null;
      this.service.formDataNew = null;
      this.dialogRef.close('Submitted');
    }
  }

  deleteImg() {
    this.httpService.deleteImageFromQues(this.service.formData.QuestionId).subscribe(res => {
      this.toastr.success('Image Successfully Removed');
      this.dialogRef.close('Submitted');
    });
  }

}
