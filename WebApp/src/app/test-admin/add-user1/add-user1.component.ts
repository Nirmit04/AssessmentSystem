import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef, MatDialog, MatDialogConfig } from '@angular/material';
import { TestAdminService } from '../shared/test-admin.service';
import { User } from '../shared/user.model';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-add-user1',
  templateUrl: './add-user1.component.html',
  styleUrls: ['./add-user1.component.css']
})
export class AddUser1Component implements OnInit {
  quiztakers: any[];

  constructor(@Inject(MAT_DIALOG_DATA) public data,
    public service: TestAdminService,
    public toastr: ToastrService,
    private dialogRef: MatDialogRef<AddUser1Component>) { }

  ngOnInit() {
    this.loadUsers()
  }
  loadUsers() {
    this.service.retrieveAllEmployees(this.data).subscribe((res: any) => {
      res.forEach(obj => obj.selected = false);
      this.quiztakers = res as User[];
    });
  }
  updateSelectedUsers(index) {
    this.quiztakers[index].selected = !this.quiztakers[index].selected;
  }
  onSubmit(form: NgForm) {
    var quiztakerId = this.quiztakers.filter(Id => Id.selected).map(idSelected => idSelected.Id);
    this.service.addUserInExistingSchedule(this.data, quiztakerId).subscribe(res => {
      this.toastr.success('added succesfully');
      this.dialogRef.close('Added');
    });


  }
}
