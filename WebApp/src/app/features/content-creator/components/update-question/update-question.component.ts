import { Component, OnInit, Inject } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ContentCreatorService } from '../../services/content-creator-service.service'
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

  public subjects: Subject[];
  public createdBy: string = '';
  public flag: boolean = false;
  public label: string;
  public imageSource: string = null;
  public dropdownSettings = null;

  constructor(@Inject(MAT_DIALOG_DATA) public data,
    public dialogRef: MatDialogRef<UpdateQuestionComponent>,
    public service: ContentCreatorService,
    private storageService: StorageService,
    public toastr: ToastrService,
    private httpService: HttpService) { }

  public ngOnInit(): void {
    this.flag = this.service.readonlyStatus;
    if (this.flag === true) {
      this.label = "View Question";
    } else {
      this.label = "Edit Questions";
    }
    if (this.service.formData.ImageName !== null) {
      this.imageSource = environment.imgURl + this.service.formData.ImageName;
    }
    this.dropdownSettings = {
      singleSelection: false,
      idField: 'SubjectId',
      textField: 'Name',
      enableCheckAll: false,
      itemsShowLimit: 5,
      allowSearchFilter: true,
    };
    this.createdBy = this.storageService.getStorage('uid');
    const subscription = this.httpService.retrieveSubjects().subscribe(res => {
      this.subjects = res as Subject[];
    });
    subscription.unsubscribe();
  }

  private resetForm(form?: NgForm): void {
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

  public chooseFile(event): void {
    this.service.selectedFile = event.target.files.item(0);
  }

  public onSubmit(form: NgForm): void {
    const response = this.service.updateQuestion(form.value);
    if (response) {
      this.toastr.success('Updated successfully');
      this.service.selectedFile = null;
      this.service.formDataNew = null;
      this.dialogRef.close('Submitted');
    }
  }

  public deleteImage(): void {
    const subscription = this.httpService.deleteImageFromQues(this.service.formData.QuestionId).subscribe(res => {
      this.toastr.success('Image Successfully Removed');
      this.dialogRef.close('Submitted');
    });
    subscription.unsubscribe();
  }

}
